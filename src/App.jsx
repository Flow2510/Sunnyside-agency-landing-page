import './App.scss'
import About from './assets/components/about/about'
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
    </>
  )
}

export default App
