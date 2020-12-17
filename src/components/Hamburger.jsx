import React from "react"
import styles from "./Hamburger.module.scss"
import classNames from "classnames"
import PropTypes from "prop-types"

const Hamburger = ({ open, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.container}>
        <div
          className={classNames(styles.line, { [styles.topActive]: open })}
        ></div>
        <div
          className={classNames(styles.line, {
            [styles.middleActive]: open,
          })}
        ></div>
        <div
          className={classNames(styles.line, {
            [styles.bottomActive]: open,
          })}
        ></div>
      </div>
    </div>
  )
}

Hamburger.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Hamburger
