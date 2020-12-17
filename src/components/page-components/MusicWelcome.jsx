import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    <Section>
      <WelcomeText />
      <Img fluid={data.file.childImageSharp.fluid} />
    </Section>
  )
}

const WelcomeText = () => (
  <div className={styles.welcomeTextContainer}>
    <Arrow className={styles.arrow}/>
    <p className={styles.text}>
      Welcome to the music page! Watch my YouTube videos, listen to my
      SoundCloud tracks, and more.
    </p>
  </div>
)

export default Welcome
