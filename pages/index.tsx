import { useEffect } from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Inicio from '../Components/Inicio'
import Navbar from '../Components/Navbar'
import Proyects from '../Components/Proyects'
import Skills from '../Components/Skills'

const IndexPage = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Wilinston Quispe'
  }, [])
  return (
    <>
      <Navbar />
      <Inicio />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
