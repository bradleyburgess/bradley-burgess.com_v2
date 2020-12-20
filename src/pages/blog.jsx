import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import styles from "../css/BlogPage.module.scss"

export default function BlogPage({ data }) {
  console.log(data.allFile.nodes[0].childMarkdownRemark.frontmatter)
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <ul className={styles.list}>
        {data.allFile.nodes.map(item => (
          <BlogPostListItem
            key={item.childMarkdownRemark.frontmatter.slug}
            item={item.childMarkdownRemark}
          />
        ))}
      </ul>
    </Layout>
  )
}

const BlogPostListItem = ({ item }) => (
  <li>
    <h3 className={styles.title}>
      <Link to={`/blog/${item.frontmatter.slug}`}>
        {item.frontmatter.title}
      </Link>
    </h3>
    <h4 className={styles.meta}>
      <span className={styles.date}>{item.frontmatter.date}</span>
      <span className={styles.divider}> / </span>
      <span className={styles.category}>{item.frontmatter.category}</span>
      {/*
        {item.frontmatter.tags && <span className={styles.divider}> / </span>}
        {item.frontmatter.tags && (
        <span className={styles.tag}>
        {item.frontmatter.tags.map((tag, i, arr) => `#${tag} `)}
          </span>
      )}
      */}
    </h4>
    <p className={styles.excerpt}>
      {item.excerpt}{" "}
      <Link to={`/blog/${item.frontmatter.slug}`}>read more</Link>
    </p>
  </li>
)

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativeDirectory: { eq: "blog" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 1000
    ) {
      nodes {
        childMarkdownRemark {
          excerpt(truncate: true)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            tags
          }
          html
        }
      }
    }
  }
`
