import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faInstagram,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons"
import styles from "./SocialLinks.module.scss"

const socialList = [
  {
    name: "Twitter",
    url: "https://twitter.com/bburgess_keys",
    icon: faTwitter,
    brandColor: "#1DA1F2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bburgess_keys/",
    icon: faInstagram,
    brandColor: "#833AB4",
  }, // or #C13584
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCokdUXWC4fQHSwfkIsZLcAA",
    icon: faYoutube,
    brandColor: "#FF0000",
  },
  {
    name: "GitHub",
    url: "https://github.com/bradleyburgess",
    icon: faGithub,
    brandColor: "#212121",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/bradleyburgessmusic",
    icon: faSoundcloud,
    brandColor: "#FE5000",
  },
]

const SocialLinks = () => (
  <ul className={styles.list}>
    {socialList.map(item => (
      <li key={item.name} className={styles.listItem}>
        <a href={item.url}>
          <span className={classNames(styles.iconContainer, styles[item.name])}>
            <FontAwesomeIcon size="sm" icon={item.icon} />
          </span>
        </a>
      </li>
    ))}
  </ul>
)

export default SocialLinks
