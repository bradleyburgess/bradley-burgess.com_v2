import React, { useEffect } from "react"
import {
  defineCustomElements as deckDeckGoHighlightElement,
  defineCustomElements,
} from "@deckdeckgo/highlight-code/dist/loader"
import Heading from "../components/Heading"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./BlogTemplate.module.scss"

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  useEffect(() => {
    defineCustomElements()
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>
        Blog
        {frontmatter.category && (
          <>
            <span className={styles.divider}> : </span>
            <span className={styles.category}>{frontmatter.category}</span>
          </>
        )}
      </Heading>
      <h3 className={styles.title}>{frontmatter.title}</h3>
      <h4 className={styles.meta}>
        <span className={styles.date}>{frontmatter.date}</span>
        {frontmatter.tags && <span className={styles.divider}> / </span>}
        {frontmatter.tags &&
          frontmatter.tags.map(tag => (
            <span className={styles.tag}>#{tag} </span>
          ))}
      </h4>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
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
        category
        tags
      }
    }
  }
`
