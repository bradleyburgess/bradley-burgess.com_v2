import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./NavLink.module.scss"

const NavLink = ({ onClick, slug, title, status }) => {
  switch (status) {
    case "active": {
      return (
        <li className={classNames(styles.menuItem)} onClick={onClick}>
          <Link
            to={slug}
            activeClassName={styles.current}
            className={styles.menuLink}
          >
            {title}
          </Link>
        </li>
      )
    }
    case "coming-soon": {
      return (
        <li className={classNames(styles.menuItem, styles.comingSoon)}>
          {title}{" "}
          <span className={classNames(styles.status, styles.comingSoon)}>
            coming soon
          </span>
        </li>
      )
    }
    case "new": {
      return (
        <li className={classNames(styles.menuItem)} onClick={onClick}>
          <Link
            to={slug}
            activeClassName={styles.current}
            className={styles.menuLink}
          >
            {title}
          </Link>{" "}
          <span className={classNames(styles.status, styles.new)}>new</span>
        </li>
      )
    }
    default: {
      return
    }
  }
}

NavLink.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
}

export default NavLink
