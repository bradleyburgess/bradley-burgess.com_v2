import React from "react"
import PropTypes from "prop-types"
import styles from "./YoutubeEmbed.module.scss"

const YoutubeEmbed = ({ src }) => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}
      ></iframe>
    </div>
  )
}

YoutubeEmbed.propTypes = {
  src: PropTypes.string,
}

export default YoutubeEmbed
