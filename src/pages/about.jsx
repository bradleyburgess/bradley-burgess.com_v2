import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import Heading from "../components/Heading"
import FlowText from "../components/FlowText"
import P from "../components/P"
import Section from "../components/Section"
import SubHeading from "../components/SubHeading"
import styles from "../css/AboutPage.module.scss"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>About me</Heading>
      <Section>
        <SubHeading>I’m a pianist & organist.</SubHeading>
        <P>
          I love the piano and its repertoire, and I love performing. I
          especially love the music of Beethoven, Brahms, and Liszt: Beethoven
          because of his unparalleled marriage of form and feeling; Brahms
          because he picked up where Beethoven left off; and Liszt because he
          was such an enigma — priest, showman, visionary, poet, virtuoso. I
          adore Bach too, but I mainly spend time with him when I’m at the
          organ.
        </P>
        <P>
          Perhaps it’s because I love things with keyboards, but after two
          degrees in piano performance I decided that I needed a third degree —
          in organ performance. (Why have one keyboard when five will do?). As
          an organist, I’ve given recitals, worked in churches, conducted
          choirs, and composed / arranged some of my own music. I currently
          serve as Associate Director of Music & Worship Arts at Edenton Street
          United Methodist Church in Raleigh, NC.
        </P>
        <div className={styles.callToAction}>
          <FlowText>
            <Button inline to="/">
              read
            </Button>{" "}
            full bio
          </FlowText>
          <FlowText>
            <Button inline to="/">
              explore
            </Button>{" "}
            my music
          </FlowText>
        </div>
      </Section>
      <Section>
        <SubHeading>I'm a full-stack web developer</SubHeading>
        <P>
          I’ve always loved to tinker with tech. After years of playing around
          off-and-on with HTML and CSS (and BASIC when I was younger), I decided
          to study web development more seriously.
        </P>
        <P>
          I work mainly with Javascript — including React, Gatsby & Node — and
          am getting acquainted with Typescript. I’m currently working on a
          couple static sites for friends, as well some full-stack personal
          projects.
        </P>
        <P>
          I run Linux exclusively at home (currently Debian Buster), and almost
          always code in NeoVim with COC.
        </P>
        {/* <div className={styles.callToAction}> */}
        {/*   <FlowText> */}
        {/*     <Button inline to="/"> */}
        {/*       read */}
        {/*     </Button>{" "} */}
        {/*     my blog */}
        {/*   </FlowText> */}
        {/*   <FlowText> */}
        {/*     <Button inline to="/"> */}
        {/*       see */}
        {/*     </Button>{" "} */}
        {/*     my work */}
        {/*   </FlowText> */}
        {/* </div> */}
      </Section>
    </Layout>
  )
}
