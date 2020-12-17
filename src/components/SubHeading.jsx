import React from "react"
import PropTypes from "prop-types"
import styles from "./SubHeading.module.scss"

const SubHeading = ({ children }) => (
  <h2 className={styles.root}>{children}</h2>
)

SubHeading.propTypes = {
  children: PropTypes.string,
}

export default SubHeading
