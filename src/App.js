import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/portfolio-2.0/' element={<About />} />
        <Route path='/portfolio-2.0/contact' element={<Contact />} />
        <Route path='/portfolio-2.0/portfolio' element={<Portfolio />} />
        <Route path='/portfolio-2.0/resume' element={<Resume />} />
      </Routes>
    </>
  )
}

export default App;
