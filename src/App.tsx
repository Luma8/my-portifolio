import AboutMe from "./Pages/AboutMe"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Portfolio from "./Pages/Portfolio"
import Video from "./Pages/Video"

function App() {

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Home />
      <AboutMe />
      <Video />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
