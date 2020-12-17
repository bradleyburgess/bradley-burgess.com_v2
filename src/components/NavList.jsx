import React from "react"
import NavLink from "./NavLink"
import * as siteConfig from "../../siteConfig"

const NavList = () => (
  <nav>
    <ul>
      {siteConfig.menu.map(item => (
        <NavLink key={item.slug} {...item} />
      ))}
    </ul>
  </nav>
)

export default NavList
