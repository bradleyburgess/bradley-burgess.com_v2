import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/Button"
import FlowText from "../components/FlowText"
import Heading from "../components/Heading"
import styles from "../css/IndexPage.module.scss"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Heading>Hi, I'm Bradley.</Heading>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ marginBottom: "3rem" }}
      />
      <FlowText>I’m a pianist, organist and full-stack web developer.</FlowText>
      <FlowText>
        I love building and creating things with keyboards — whether it’s Bach
        toccatas or Javascript apps.
      </FlowText>

      <div id="call-to-action" className={styles.callToAction}>
        <FlowText>
          <Button to="/about">learn</Button> more about me
        </FlowText>
        <FlowText>
          <Button to="/music">explore</Button> my music
        </FlowText>
        <FlowText>
          <Button to="/blog">read</Button> my blog
        </FlowText>
      </div>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  {
    file(relativePath: { glob: "bradley-outside-bench2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
