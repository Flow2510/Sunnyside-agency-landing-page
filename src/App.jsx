import './App.scss'
import About from './assets/components/about/about'
import Footer from './assets/components/footer/footer'
import Header from './assets/components/header/header'
import Intro from './assets/components/intro/intro'

function App() {

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
