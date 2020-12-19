/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.jsx`)

  const result = await graphql(`
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
          relativePath
          childMarkdownRemark {
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
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allFile.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.childMarkdownRemark.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.childMarkdownRemark.frontmatter.slug,
      },
    })
  })
}
