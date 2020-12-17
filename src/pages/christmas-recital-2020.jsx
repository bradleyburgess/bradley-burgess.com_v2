import React from "react"
import { Router } from "@reach/router"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import Heading from "../components/Heading"
import P from "../components/P"
import Section from "../components/Section"
import YoutubeEmbed from "../components/YoutubeEmbed"
import styles from "../css/ChristmasRecital2020.module.scss"

const indivRecitalItems = [
  {
    title: "Carol Rhapsody",
    composer: "Richard Purvis",
    slug: "purvis-carol-rhapsody",
    url: "#",
  },
  {
    title: "In dulci jubilo, BWV 729",
    composer: "Johann Sebastian Bach",
    slug: "bach-in-dulci-jubilo",
    url: "#",
  },
  {
    title: "Es ist ein Ros entsprungen",
    composer: "Johannes Brahms",
    slug: "brahms-es-ist-ein-ros",
    url: "#",
  },
  {
    title: "Toccatina on ‘Angels We Have Heard On High’",
    composer: "Richard Elliott",
    slug: "elliott-toccatina-angels",
    url: "#",
  },
  {
    title: "Prelude on ‘Greensleeves’",
    composer: "Richard Purvis",
    slug: "purvis-greensleeves",
    url: "#",
  },
  {
    title: "Toccata on ‘Veni Emmanuel’",
    composer: "Andrew Carter",
    slug: "carter-toccata-veni-emmanuel",
    url: "#",
  },
  {
    title: "Two Settings of ‘Joy to the World’",
    composer: "Jacob Weber",
    slug: "weber-joy-to-the-world",
    url: "#",
  },
]

export default function ChristmasRecital2020({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Christmas Recital 2020" />
      <Heading>Christmas Recital 2020</Heading>
      <Router>
        <Index data={edges} path="/christmas-recital-2020" />
        {edges.map((item, index, array) => (
          <RecitalItem
            key={item.node.frontmatter.slug}
            path={`/christmas-recital-2020/${item.node.frontmatter.slug}`}
            item={item.node}
            index={index}
            array={array}
          />
        ))}
      </Router>
    </Layout>
  )
}

const Index = ({ data }) => {
  return (
    <Section>
      <P>
        Welcome to my 2020 Christmas Recital! There is such a breadth of
        wonderful music that has been written over the ages for the Advent and
        Christmas season. I didn't want to allow cancelled and modified events
        due to COVID-19 to prevent me from sharing the music that I so enjoy
        playing at this time of the year. I am delighted that you can join me
        for a 22-minute program of some of my favorite Christmas organ works —
        all based on familiar carols.
      </P>
      <P>
        You can listen to the program one item at a time with notes, or you can
        find the{" "}
        <a href="https://www.youtube.com/watch?v=FayQsx2IjQU&list=PLxwU2G1FQnyRWKgNbXSBvGZskXH_L3y-A">
          music-only playlist on my YouTube Channel
        </a>
        .
      </P>
      <h2>Program</h2>
      <ol className={styles.list}>
        {data.map((item, index) => (
          <li key={item.node.frontmatter.slug} className={styles.listItem}>
            <Link to={`/christmas-recital-2020/${item.node.frontmatter.slug}`}>
              {`${item.node.frontmatter.composer}: ${item.node.frontmatter.title}`}
            </Link>
          </li>
        ))}
      </ol>
      <div className={styles.navContainer}>
        <div style={{ float: "right" }}>
          <Button to="/christmas-recital-2020/elliott-toccatina-angels">
            next
          </Button>
        </div>
      </div>
    </Section>
  )
}

const RecitalItem = ({ item, index, array }) => (
  <Section>
    <h2 className={styles.pieceTitle}>{item.frontmatter.title}</h2>
    <h3 className={styles.pieceComposer}>{item.frontmatter.composer}</h3>
    <YoutubeEmbed src={item.frontmatter.videoUrl} />
    <div
      className={styles.programNote}
      dangerouslySetInnerHTML={{ __html: item.html }}
    ></div>
    <div className={styles.navContainer}>
      <div style={{ float: "left" }}>
        <Button
          to={`/christmas-recital-2020/${
            index === 0 ? "" : array[index - 1].node.frontmatter.slug
          }`}
        >
          prev
        </Button>
      </div>
      {index < array.length - 1 && (
        <div style={{ float: "right" }}>
          <Button
            to={`/christmas-recital-2020/${
              array[index + 1].node.frontmatter.slug
            }`}
          >
            next
          </Button>
        </div>
      )}
    </div>
  </Section>
)

export const christmasRecital2020Query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/christmas-recital-2020/*" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          id
          frontmatter {
            composer
            slug
            title
            videoUrl
          }
          html
        }
      }
    }
  }
`
