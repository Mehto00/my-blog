---
title: Git reflog - A Hidden gem of git 
date: "2019-10-01"
description: "Git reflog is amazingly handy command i managed to stumbled upon to not that long ago. Let me tell you why."
tags: ["en", "git", "git reflog"]
published: true
---
First things first: I'm still a bit of a n00b when it comes to using Git. I understand the basic consept and can work my way through with it, but that's about it. Otherwise time to time it still can be a bit tricky for me to handle.

## I messed up

Few weeks ago I did it again. Committing something on master branch when I should have being doing so on development branch. Both of them have remotes on Gitlab and there are other on my team using those branches as well. At this point ```git status``` told 

```bash
Your branch is ahead of 'origin/master' by 1 commit.
```

I realized this before pushing anything to remote. At this point _(n00b me)_ I though the logical move would be just checkout to development and ```git rebase master``` so poor me I went along and did just that. Well this didn't of course work. I had assumed that it was a nice simple solution to get that one extra commit to development branch and after that push it to remote and continue from there. After running the command and loging status the terminal informed me that 

```bash
Your branch is ahead of 'origin/development' by 22 commit.
```

![elmo-shrug-iguess-imessed-up-gif](./messedUp.gif)

I could continue by writing about `git rebase` _(that I went and studied a lot)_ and how it basically reapplies all the commits from your branch to the tip of another branch. <a href="https://www.daolf.com/posts/git-series-part-2/#the-base-of-the-rebase" target="_blank">[1]</a> but that's for another post. I'm trying to keep this short and that's why this should be all about `git reflog`

## Reference logs to the rescue

Git docs states that:

>Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository. Reflogs are useful in various Git commands, to specify the old value of a reference. <a href="https://git-scm.com/docs/git-rebase#_description" target="_blank">[2]</a>

So basically _(at least for me)_ `git reflog` is somewhat similar to `git log` as in reflog gives me visual hint and point of reference of what have I done as Git log does with the commits. At least for me this is tons of help. 

As I mentioned at the start of this post I'm still learning my ways around with Git and sometimes I might be doing something that I think is correct but later on turns out wasn't. Easiest thing would be of course not to mess up. Like never ever mess up, but let's face it that is not going to happen. Ever. We all make mistakes and so enters `git reflog`. 

The command provides a quick and helpful view to take a glance at when something has went south and then return to that point and start all over again. So lets say I pulled a `git reflog`and get prompted something like this: _(hox, this isn't the the same reflog I'm refering to, but just an example)_

```bash
c5a929d (HEAD -> development) HEAD@{0}: commit: Minor polishing to tag links
ec1a2cd (origin/master, origin/development, master) HEAD@{1}: checkout: moving from master to development
ec1a2cd (origin/master, origin/development, master) HEAD@{2}: merge development: Fast-forward
5512812 HEAD@{3}: checkout: moving from development to master
ec1a2cd (origin/master, origin/development, master) HEAD@{4}: commit: removed header images entirely untill I'll find a solution that is satisfying
5512812 HEAD@{5}: checkout: moving from master to development
5512812 HEAD@{6}: reset: moving to HEAD
5512812 HEAD@{7}: merge development: Fast-forward
8b82e44 HEAD@{8}: checkout: moving from development to master
```

So just by looking out the reference log I can see where I went wrong. Then I can use this information to  `git checkout` back to a place where I made my commit on a wrong branch. So I woud checkout to the tag just before the stupid `git rebase` where the commit was made with let's say `git checkout HEAD@{5}` and after that undo the lastest commit with `git reset --soft HEAD^`. 

From here it's fairly simple. _(If before all this was not)_. Just `git reset HEAD <file>..." to unstage` to unstage the added files and `git stash` to catch and temporary store the written changes to files. After running `git status` and `git log` I'm 100 percent sure that now detached HEAD is the good state so I can use maybe otherwise risky `git branch -f master HEAD` to reattach current head to master. From HEAD pointing to Master I can do `git checkout development` to land to the correct branch and then continue from there with `git stash apply`.

### P.S.

The commit undo itself would have being easy to handle with `git revert <unwanted commit hash>`, but basically all went south because of my rebase gimmicks. All in all I wrote this post because of two things: As a proof to myself that maybe gradually I can start finding my ways with problem solving in Git and most importantly to praise the `git reflog`. Git would have been so much more clearer on many times if I ever knew there was this magic mirror to use.

<br>

![Even-The-Most-Interesting-Man-in-the-World-uses-git-reflog](./tmimitw.jpg)

<br>