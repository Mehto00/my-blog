---
title: Git reflog - A Hidden gem of git 
date: "2019-09-29"
description: "Git reflog is a handy command i managed to stumbled among not that long ago"
tags: ["en"]
published: false
---

#Git reflog - A Hidden gem of git

Few weeks ago I did it again. Committing something on master branch when I should have being doing so on development branch. Both of them have remotes on Gitlab and there are other time to time using them as well. At this point ```git status``` told 

```Your branch is ahead of 'origin/development' by 1 commit.```

I realized this before pushing anything to remote. At this point (n00b me) I though the logical move would be just checkout to development and ```git rebase master``` so poor me I went along and did just that. Well this didn't of course work. 

