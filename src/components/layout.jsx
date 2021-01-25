import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Sidebar from "./Sidebar"
import Hamburger from "./Hamburger"
import Topbar from "./Topbar"
import "normalize.css/normalize.css"
import "./layout.scss"

const Layout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1024, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    var _paq = (window._paq = window._paq || [])
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["trackPageView"])
    _paq.push(["enableLinkTracking"])
    ;(function () {
      var u = "https://do-matomo.bombarde32.net/"
      _paq.push(["setTrackerUrl", u + "matomo.php"])
      _paq.push(["setSiteId", "2"])
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0]
      g.type = "text/javascript"
      g.async = true
      g.src = u + "matomo.js"
      s.parentNode.insertBefore(g, s)
    })()
  })

  const handleMenuClick = () => {
    setSidebarActive(s => !s)
    // document.querySelector("body").classList.toggle("no-scroll")
  }

  const handleMenuItemClick = () => {
    setSidebarActive(false)
  }

  return (
    <>
      {windowSize.width < 1024 && (
        <>
          <Hamburger open={sidebarActive} onClick={handleMenuClick} />
          <Topbar />
        </>
      )}
      <div id="site-container">
        <div id="sidebar-container">
          <Sidebar
            onMenuItemClick={handleMenuItemClick}
            active={sidebarActive}
          />
        </div>
        <div id="content">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
