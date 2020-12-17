import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./Topbar.module.scss"

const Topbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bradley-avatar.jpg" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div id="top-bar" className={styles.root}>
      <Link to="/">
        <Img
          fixed={data.file.childImageSharp.fixed}
          className={styles.avatar}
        />
      </Link>
      <h2 className={styles.heading}>Bradley Burgess</h2>
    </div>
  )
}

export default Topbar
