import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <h3>{frontmatter.title}</h3>
      <h4>{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
