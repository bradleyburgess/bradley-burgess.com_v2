import React from "react"
import FlowText from "../FlowText"
import Section from "../Section"
import SubHeading from "../SubHeading"

const MusicAudio = () => {
  return (
    <Section>
      <SubHeading>SoundCloud tracks</SubHeading>
      <main>
        <FlowText>
          <a href="https://soundcloud.com/bburgess_keys/sets/piano">
            Piano Tracks
          </a>
        </FlowText>
        <FlowText>
          <a href="https://soundcloud.com/bburgess_keys/sets/organ">
            Organ Tracks
          </a>
        </FlowText>
      </main>
    </Section>
  )
}

export default MusicAudio
