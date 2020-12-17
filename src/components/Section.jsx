import React from "react"
import PropTypes from "prop-types"
import styles from "./Section.module.scss"

const Section = ({ children }) => (
  <section className={styles.root}>{children}</section>
)

Section.propTypes = {
  children: PropTypes.element
}

export default Section
