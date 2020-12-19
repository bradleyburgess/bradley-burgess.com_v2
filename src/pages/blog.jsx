import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <ul>
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
    <Link to={`/blog/${item.frontmatter.slug}`}>
      <h3>{item.frontmatter.title}</h3>
    </Link>
    <h4>{item.frontmatter.date}</h4>
    <p>{item.excerpt}</p>
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
          }
          html
        }
      }
    }
  }
`
