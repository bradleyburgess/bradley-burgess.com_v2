import React, { useState } from "react"
import classNames from "classnames"
import Section from "../Section"
import SubHeading from "../SubHeading"
import YoutubeEmbed from "../YoutubeEmbed"
import styles from "./MusicVideo.module.scss"
import { videoList } from "../../../content/music/music-videos"

const MusicVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(videoList[0])

  const handleSelect = newSelection => {
    setCurrentVideo(newSelection)
  }

  return (
    <Section>
      <SubHeading>YouTube videos</SubHeading>
      {currentVideo && <YoutubeEmbed src={currentVideo.url} />}
      <ul className={styles.list}>
        {videoList.map(item => (
          <li
            key={item.url}
            className={classNames(styles.listItem, {
              [styles.listItemSelected]: item.url === currentVideo.url,
            })}
            onClick={() => handleSelect(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default MusicVideo
