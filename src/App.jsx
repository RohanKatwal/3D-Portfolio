import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar"
import Experience from "./sections/ExperienceSections"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experience/>
    </>
  )
}

export default App