import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Video from "../components/Video"

const Homepage = () => {
  return (
    <>
      <main className="bg-background">
        <Navbar />
        <Hero />
        <Video />
      </main>
    </>
  )
}

export default Homepage
