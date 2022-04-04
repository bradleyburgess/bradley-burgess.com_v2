import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Section from "../Section"
import SubHeading from "../SubHeading"
import styles from "./MusicBio.module.scss"

const MusicBio = () => {
  const data = useStaticQuery(graphql`
    {
      headshot: file(relativePath: { eq: "bradley-headshot4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      text: file(relativePath: { eq: "music/bio.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  return (
    <Section>
      <SubHeading>Full music bio</SubHeading>
      <main>
        <Img
          fluid={data.headshot.childImageSharp.fluid}
          className={styles.headshot}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data.text.childMarkdownRemark.html,
          }}
        />
        {/* <P> */}
        {/*   Praised for his “virtuoso piano playing” and his ability to leave */}
        {/*   audiences “spellbound” (ClassicSA), Bradley Burgess is one of today’s */}
        {/*   few concert artists who can move seamlessly between the piano bench */}
        {/*   and organ console, and enjoys a multifaceted career as concert */}
        {/*   pianist, concert organist, and church musician. */}
        {/* </P> */}
        {/* <P> */}
        {/*   Bradley has appeared in recital in many major venues of his home */}
        {/*   country of South Africa, as well as in the UK, Finland, and across the */}
        {/*   United States, including performances at Church of the Transfiguration */}
        {/*   (New York, NY), Third Baptist Church (St. Louis, MO), St. Peter’s */}
        {/*   Church (Long Island, NY), Rutgers University (Camden, NJ), Woolsey */}
        {/*   Hall (New Haven, CT), Baxter Concert Hall (Cape Town, South Africa), */}
        {/*   and King’s Chapel (Boston, MA). */}
        {/* </P> */}
        {/* <P> */}
        {/*   Bradley holds undergraduate and graduate degrees in piano performance */}
        {/*   from the Manhattan School of Music in New York City, the University of */}
        {/*   Cape Town, and Yale University’s Institute of Sacred Music and School */}
        {/*   of Music, where he was awarded the Julie B. Sherman Prize for */}
        {/*   excellence in organ playing. He has also been the recipient of First */}
        {/*   Prize at the Fine Music Radio / Pick ‘n Pay 101.3 Music Awards, the */}
        {/*   Oppenheimer Memorial Trust Bursary, and a generous grant from the */}
        {/*   National Arts Council of South Africa. Bradley has served as Director */}
        {/*   of Music & Organist at St. Mark's Episcopal Church (Islip, NY), */}
        {/*   Minister of Music at Middlebury Congregational Church (Middlebury, */}
        {/*   CT), Organ Scholar at Yale Divinity School's Marquand Chapel. He */}
        {/*   currently serves as Associate Director of Music and Worship Arts at */}
        {/*   historic Edenton Street United Methodist Church, in Raleigh, NC. */}
        {/* </P> */}
      </main>
    </Section>
  )
}

export default MusicBio
