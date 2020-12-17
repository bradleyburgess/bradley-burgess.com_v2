import React from "react"
import PropTypes from "prop-types"
import styles from "./P.module.scss"

const P = ({ children }) => <p className={styles.root}>{children}</p>

P.propTypes = {
  children: PropTypes.string,
}

export default P
