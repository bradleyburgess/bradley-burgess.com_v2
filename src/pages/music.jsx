import React from "react"
import PropTypes from "prop-types"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Section from "../components/Section"
import SEO from "../components/seo"
import Welcome from "../components/page-components/MusicWelcome"
import Video from "../components/page-components/MusicVideo"
import styles from "../css/MusicPage.module.scss"

const buttonList = [
  { name: "video", disabled: false },
  { name: "audio", disabled: false },
  { name: "bio", disabled: false },
  { name: "scores", disabled: true },
]

export default function MusicPage({ location }) {
  return (
    <Layout>
      <SEO title="Music" />
      <Heading>Music</Heading>
      <Section>
        <div className={styles.navButtonsContainer}>
          {buttonList.map(item => (
            <Button
              key={item.name}
              marginRight="1em"
              to={`/music/${item.name}`}
              disabled={item.disabled}
              active={location.pathname === `/music/${item.name}`}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </Section>
      <Router>
        <Welcome path="/music" />
        <Video path="/music/video" />
      </Router>
    </Layout>
  )
}

MusicPage.propTypes = {
  location: PropTypes.object,
}
