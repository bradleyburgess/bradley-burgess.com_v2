import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Heading from "../components/Heading"
import FlowText from "../components/FlowText"
import SEO from "../components/seo"
import { ReactComponent as Arrow } from "../icons/noun_curved arrow_547362.svg"
import styles from "../css/NotFoundPage.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <Heading>Page not found</Heading>
    <FlowText>
      Oops! This page doesn't exist. Did it ever? Not sure. But it sure isn't
      here now!
    </FlowText>
    <FlowText>
      Try one of the menu options instead.
    </FlowText>
    <Arrow className={styles.arrow} />
  </Layout>
)

export const notFoundPageQuery = graphql`
  {
    file(relativePath: { glob: "noun" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
