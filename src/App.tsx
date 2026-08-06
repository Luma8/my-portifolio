import AboutMe from "./Pages/AboutMe"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Video from "./Pages/Video"

function App() {

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Home />
      <AboutMe />
      <Video />
      <Footer />
    </div>
  )
}

export default App
