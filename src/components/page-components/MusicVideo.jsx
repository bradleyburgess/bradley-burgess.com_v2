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
  {
    title: 'Jacob Weber: Two Settings on "Antioch"',
    duration: "3:49",
    url: "https://www.youtube.com/watch?v=Ge3K1gByNGQ",
  },
  {
    title: 'Richard Purvis: Prelude on "Greensleeves"',
    duration: "4:09",
    url: "https://www.youtube.com/watch?v=v1BUwVxm4FA",
  },
  {
    title: 'Richard Elliott: Toccatina on "Angels We Have Heard"',
    duration: "1:25",
    url: "https://www.youtube.com/watch?v=FayQsx2IjQU",
  },
  {
    title: 'Andrew Carter: Toccata on "Veni Emmanuel"',
    duration: "3:42",
    url: "https://www.youtube.com/watch?v=bD7wm5GWxrQ",
  },
  {
    title: 'Brahms: Es ist ein Ros entsprungen',
    duration: "2:46",
    url: "https://www.youtube.com/watch?v=8IhuAbw_YIw",
  },
  {
    title: 'J.S. Bach: In dulci jubilo, BWV 729',
    duration: "2:35",
    url: "https://www.youtube.com/watch?v=G0PbQc3h8y4",
  },
  {
    title: 'Richard Purvis: Carol Rhapsody',
    duration: "4:01",
    url: "https://www.youtube.com/watch?v=4vYCOTOBfJg",
  },
  {
    title: 'Improvisation: "Let everything that has breath"',
    duration: "2:25",
    url: "https://www.youtube.com/watch?v=QTCYr53x64Q&list=PLxwU2G1FQnySW4-SWaU4p7Qj0qhFUz8SD&index=3"
  }
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
