import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./Button.module.scss"

const Button = ({ active, children, to, inline, marginRight, disabled }) => {
  if (!to || disabled) {
    return (
      <span
        className={classNames(
          styles.button,
          styles.disabled,
          {
            [styles.inline]: inline,
          },
          { [styles.default]: !disabled && !active }
        )}
        style={{ marginRight }}
      >
        {children}
      </span>
    )
  }
  return to[0] === "/" ? (
    <Link
      to={to}
      className={classNames(
        styles.button,
        { [styles.inline]: inline },
        { [styles.default]: !disabled && !active }
      )}
      style={{ marginRight }}
    >
      {children}
    </Link>
  ) : (
    <a
      href={to}
      className={classNames(
        styles.button,
        { [styles.inline]: inline },
        { [styles.default]: !disabled && !active }
      )}
      style={{ marginRight }}
    >
      {children}
    </a>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  inline: PropTypes.bool,
  marginRight: PropTypes.string,
}

export default Button
