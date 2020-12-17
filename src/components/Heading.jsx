import React from "react"
import PropTypes from "prop-types"
import styles from "./Heading.module.scss"

const Heading = ({ children }) => <h1 className={styles.heading}>{children}</h1>

Heading.propTypes = {
  children: PropTypes.string,
}

export default Heading
