import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar"
import Experience from "./sections/ExperienceSections"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/Techstack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experience/>
    <TechStack/>
    <Testimonials/>
    </>
  )
}

export default App