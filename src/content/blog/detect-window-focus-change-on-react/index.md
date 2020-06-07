---
title: "Detect window focus change using React"
date: "2020-06-07"
description: "Hello World"
tags: ["en, React"]
published: true
---

I'm contributing one of my friends chat app project and last week built a toggle that detects if browser window looses or gains its focus. From that it was quite easy to add some additional conditionals that decides what is to be rendered on tabs title. So if the window has lost it's focus check whether there's new messages from others and if so render a notification emoji etc. to the title.

I wanted to document this handy little technique here that I was able to stumble upon so that it remains on grabs if needed.

Let's start by creating a new react project to demonstrate.

```
npx create-react-app test-app
cd test-app
npm start
```

After that it's quite simple as well. At the project, let's say in `App.js` outside the `App` function itself I created `getIsDocumentHidden` function as suggested in MDNs example.

```
const getIsDocumentHidden = () => {
  document.addEventListener("visibilitychange", function () {
    // Modify behavior...
  });
};
```