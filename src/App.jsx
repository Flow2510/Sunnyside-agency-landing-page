import './App.scss'
import About from './assets/components/about/about'
import Footer from './assets/components/footer/footer'
import Gallery from './assets/components/gallery/gallery'
import Header from './assets/components/header/header'
import Intro from './assets/components/intro/intro'
import Testimonials from './assets/components/testimonials/testimonials'

function App() {

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
