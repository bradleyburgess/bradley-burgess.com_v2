import React, { useState } from "react"
import classNames from "classnames"
import Section from "../Section"
import SubHeading from "../SubHeading"
import YoutubeEmbed from "../YoutubeEmbed"
import styles from "./MusicVideo.module.scss"

const videoList = [
  {
    title: "Sigfrid Karg-Elert: Praise the Lord with Drums & Cymbals",
    duration: "3:39",
    url: "https://www.youtube.com/embed/vzASO2Lr-Y0?rel=0&enablejsapi=1",
  },
  {
    title: 'Nicolas de Grigny: Récit du Chant, "Pange Lingua"',
    duration: "3:19",
    url: "https://www.youtube.com/embed/KVHwiOb3DVY",
  },
  {
    title: 'Johannes Brahms: "Schmücke dich, o liebe Seele"',
    duration: "3:06",
    url: "https://www.youtube.com/embed/3lYjWvF4mzQ",
  },
  {
    title: "Franz Liszt: Fantasy & Fugue on B-A-C-H",
    duration: "14:40",
    url: "https://www.youtube.com/embed/1IlX_54-Yus",
  },
  {
    title: "J.S. Bach: Prelude & Fugue in A Minor, BWV 543",
    duration: "9:52",
    url: "https://www.youtube.com/embed/StIe7jGpXcI",
  },
  {
    title: 'Franz Schmidt: Prelude & Fugue in D, "Hallelujah"',
    duration: "10:20",
    url: "https://www.youtube.com/embed/p6TMrtb5Vo4",
  },
]

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
