import './App.css'
import Header from './Components/Header/Header'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Track from './Components/Tracks/Track'
import Flutter from './TrackData/Flutter.json'
import FrontEnd from './TrackData/FrontEnd.json'
import Python from './TrackData/Python.json'
import Avr from './TrackData/Avr.json'
import FullStack from './TrackData/FullStack.json'
import CProg from './TrackData/C-Prog.json'
import Arm from './TrackData/Arm.json'
import Desktop from './TrackData/Desktop.json'
import React from './TrackData/React.json'
import Nodejs from './TrackData/Nodejs.json'
import Digital from './TrackData/Digital.json'
import Card from './Components/Cards/Card'
import ArmImage from './assets/ArmImage.jfif'
import DesktopImage from './assets/CC--.png'
import DigitalImage from './assets/digital.jpg'
import FlutterImage from './assets/flutter.jpg'
import FrontEndImage from './assets/Web.jpg'
import FullStackImage from './assets/fullStack.png'
import NodejsImage from './assets/nodejs.png'
import PythonImage from './assets/python.jpg'
import ReactImage from './assets/react.jpg'
import AvrImage from './assets/avr-icon-480x280.jpg'
import EmbeddedCImage from './assets/Embedded C.png'

FrontEnd.image = FrontEndImage;
CProg.image = EmbeddedCImage;
FullStack.image = FullStackImage;
Avr.image = AvrImage;
Arm.image = ArmImage;
Digital.image = DigitalImage;
Flutter.image = FlutterImage;
Nodejs.image = NodejsImage;
Python.image = PythonImage;
React.image = ReactImage;
Desktop.image = DesktopImage;

const tracks = [
  Python,
  FrontEnd,
  FullStack,
  React,
  Nodejs,
  Desktop,
  CProg,
  Avr,
  Arm,
  Flutter,
  Digital,
]
function App() {
  function Section({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          {children}
        </div>
      </section>
    )
  }
  return (
    <div className="App">
      <Header />
      <div className="cards-template">
        {
            tracks.map((item) => {
                return (
                    <Section>
                        <Card {...item} />
                    </Section>
                )
            })
        }
      </div>
      {tracks.map((item) => {
        return (
          <Section>
            <Track {...item} key={item.id} />
          </Section>
        )
      })}
    </div>
  )
}

export default App
