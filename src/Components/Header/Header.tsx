import './Header.css'
import Navbar from '../Navbar/Navbar'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function Header() {
   function Header({ children }: { children: React.ReactNode }) {
     const ref = useRef(null)
     const isInView = useInView(ref, { once: true })

     return (
       <div ref={ref} className="overlay-header">
         <div
           style={{
             transform: isInView ? 'none' : 'translateX(-200px)',
             opacity: isInView ? 1 : 0,
             transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
           }}
         >
           {children}
         </div>
       </div>
     )
   }
   function Div({ children }: { children: React.ReactNode }) {
     const ref = useRef(null)
     const isInView = useInView(ref, { once: true })

     return (
       <div ref={ref}>
         <h3
           style={{
             transform: isInView ? 'none' : 'translateY(-200px)',
             opacity: isInView ? 1 : 0,
             transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.13s',
           }}
         >
           {children}
         </h3>
       </div>
     )
   }
  return (
    <header>
      <Header>
        <Navbar />
        <h1>Sem;Colon</h1>
        <Div>
          <h3 className="sub-title">Debug Your Soul</h3>
        </Div>
      </Header>
    </header>
  )
}

export default Header
