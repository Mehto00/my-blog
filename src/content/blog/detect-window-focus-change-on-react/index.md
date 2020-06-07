---
title: "Detect window focus change using React"
date: "2020-06-07"
description: "Last week I learn how to code a toggle that detects if browser window looses or gains its focus."
tags: ["en, React", "Hooks", "visibilitychange" ]
published: true
---

I'm contributing one of my friends chat app project and last week I built a toggle that detects if browser window looses or gains its focus. After detecting the focus it was quite easy to add some additional conditionals that decides what is to be rendered on tabs title. So if the window has lost it's focus check whether there's new messages from others and if so render a notification emoji etc. to the title.

I wanted to document this handy little technique here that I was able to stumble upon so that it remains on grabs if needed.

Let's start by creating a new react project to demonstrate.

```
npx create-react-app test-app
cd test-app
npm start
```

After that it's quite simple as well. At the project, inside `App` function utilizing Hooks we can create `const [isVisible, setIsVisible]` that gets its initial value from `document.hidden`.

Note that when using Hooks they of course need to be imported. 

```
import React, { useState, useEffect } from "react";
```

After state hook creating a helper function `const onVisibilityChange = () => setIsVisible(document.hidden);` that sets IsVisible state everytime it's called.

After that inside `useEffect` Effect Hook you can create a event listener that targets `window` and takes in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event" target="_blank" rel="noopener noreferrer" >`"visibilitychange"`</a> as its type and `onVisibilityChange` as a listener. This makes sure that the `document.hidden` is checked every time there's a new render and that the `isVisible` state is updated accordingly. After that the "used" eventListener is removed in the return.

Here's the whole code. Also inside `useEffect` I set the `document.title` to be `isVisible` so that the changes in state can be seen in title when toggling between tabs.

```
import React, { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState();
  const onVisibilityChange = () => setIsVisible(document.hidden);
  
  useEffect(() => {
    window.addEventListener("visibilitychange", onVisibilityChange);
    document.title = isVisible;
    return () => {
      window.removeEventListener("visibilitychange", onVisibilityChange);
    };
  });

  return (
    <div className="App">foo</div>
  );
}

export default App;

  ```

  Lastly I didn't yet figured out how to manage focus if and when user switches from browser to lets say mail app or Visual Studio Code. With the current example the state does not update even if you have two Chrome browsers open and user toggles between them.
  Will revisit the topic if/when I manage to figure out how this is done.