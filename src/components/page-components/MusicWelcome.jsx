import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import FlowText from "../FlowText"
import Img from "gatsby-image"
import Section from "../Section"
import { ReactComponent as Arrow } from "../../icons/noun_curved arrow_547362.svg"
import styles from "./MusicWelcome.module.scss"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bradley-at-organ.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Section>
        <WelcomeText />
        <Img fluid={data.file.childImageSharp.fluid} />
      </Section>
      <Section>
        <FlowText>
          <Link to="/christmas-recital-2020">
            Watch the 2020 Christmas recital here
          </Link>{" "}
          🎅❄️🎵🎹
        </FlowText>
      </Section>
    </>
  )
}

const WelcomeText = () => (
  <div className={styles.welcomeTextContainer}>
    <Arrow className={styles.arrow} />
    <p className={styles.text}>
      Welcome to the music page! Watch my YouTube videos, listen to my
      SoundCloud tracks, and more.
    </p>
  </div>
)

export default Welcome
