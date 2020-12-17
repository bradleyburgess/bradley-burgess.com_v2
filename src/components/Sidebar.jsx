import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import * as siteConfig from "../../siteConfig"
import NavLink from "./NavLink"
import SocialLinks from "./SocialLinks"
import styles from "./Sidebar.module.scss"

const Sidebar = ({ onMenuItemClick, active }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bradley-avatar.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      id="sidebar"
      className={classNames(styles.root, { [styles.rootActive]: active })}
    >
      <Link to="/" onClick={onMenuItemClick} style={{ textAlign: "center" }}>
        <Img
          className={styles.avatar}
          fixed={data.file.childImageSharp.fixed}
        />
        <h2 className={styles.heading}>Bradley Burgess</h2>
      </Link>
      <h3 className={styles.subheading}>musician & developer</h3>
      <nav className={styles.navList}>
        <ul>
          {siteConfig.menu.map(item => (
            <NavLink onClick={onMenuItemClick} key={item.slug} {...item} />
          ))}
        </ul>
      </nav>
      <SocialLinks />
      <footer className={styles.copyright}>
        Copyright © 2020. Bradley Burgess.
      </footer>
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
  active: PropTypes.bool,
  onMenuItemClick: PropTypes.func,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
