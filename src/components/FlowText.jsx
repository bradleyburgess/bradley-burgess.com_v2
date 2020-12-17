import React from "react"
import PropTypes from "prop-types"
import styles from "./FlowText.module.scss"

const FlowText = ({ children, style }) => (
  <p className={styles.flowText} style={style}>
    {children}
  </p>
)

FlowText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
}

export default FlowText
