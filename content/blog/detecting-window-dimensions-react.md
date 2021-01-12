--- 
slug: detecting-window-dimensions-react
draft: false
date: 2020-12-19T00:49:34.760Z
title: Detecting window dimensions in React
category: dev
tags:
  - javascript
  - react
---

A couple weeks ago, while developing this site, I wanted to apply conditional,
responsive rendering based on the browser window dimensions. I've designed and
developed sites before where there is a desktop navigation and a mobile
navigation, and managed the two using css `media queries`. I didn't want to do
that for this site, though, as it can get messy with having two sets of `nav`
links.

So I looked for a javascript alternative, and couldn't find anything that worked
very well. The simplest solution I could come up with initially is the following
(this is a simplified version of the component):

```jsx
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"

function Layout() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    {
      windowWidth < 1024 ?
        /* mobile rendering /* :
        /* desktop rendering /*
    }
  )
}
```

This is pretty simple, and works fine. However, there are two main problems with
this:

1. Everytime you resize the window the event listener fires and updates the
   state. This causes unnecessary redrawing.
2. With the initial state values set to `0`, the mobile layout renders first,
   before the size is actually calculated. On desktop views, therefore, you see
   a splash of the mobile layout before the calculation is made and the desktop
   rendering is fired.

Getting around #1 is pretty straightforward. Simply change the `windowSize`
state to a boolean, that only gets updated when the window size crosses the
threshold of mobile / desktop:

```jsx
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const updateSize = () => {
    setIsMobile(window.innerWidth < 1024)
  }
  // ... etc.
```

With this, the state will only change when the boolean `isMobile` changes from
true to false or vice-versa.

This doesn't solve the undesired "splash" initial rendering. To get rid of this,
we could take this one step further and change the state to a string value, and
then apply the conditional rendering based on the string value. The initial
state value will be `undefined`, so we can simply render nothing in that case.
Here's what the completed component would look like:

```jsx
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"

function Layout() {
  const [deviceType, setDeviceType] = useState()

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(window.innerwidth < 1024 ? 'mobile' : 'desktop')
    }
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
    return () => window.removeEventListener('resize', updateDeviceType)
  }, [])

  return (
    {
      !deviceType ? null :
        deviceType === 'mobile' ?
          /* mobile rendering */ :
          /* desktop rendering */
    }
  )
}
```

That's about it. I'm sure there's an `npm` package that does this, but I really
didn't need anything fancy.
