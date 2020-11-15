import React from "react"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Subtitle from "../components/Subtitle"
import Text from "../components/Text"
import Title from "../components/Title"
import Modal from "../components/Modal"
import Navbar from "../containers/Navbar"
import WhoSection from "../containers/WhoSection"

export default function Home() {
  return (
    <div>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
      <Button theme="A">Ahgdf</Button>
      <Button theme="A" styles={{ padding: 15 }}>Ahgdf</Button>
      <Button theme="B">Ahgdf</Button>

      <Paragraph >
        jhsgdf ksdjfh sdfh hjsgd 
        <Text isBlack onClick={() => console.log('isudhf')}>ldih f</Text> 
        hjgb 
        <Text isHighlighted>ldih f</Text> 
        flaugdf
      </Paragraph>
      <Subtitle >Subtitle</Subtitle>

      <Title firstPart="Cómo" secordPart="trabajamos" />


      <Modal>
        <Subtitle >Subtitle</Subtitle>
      </Modal>
      

      ----------------------------------------------------------------------------------------------------------------------------------------------

      <WhoSection id={'who'} />

    </div>
  )
}
