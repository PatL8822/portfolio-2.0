import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import { Route, Routes } from "react-router-dom"

function App() {
  let component
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </>
  )
}

export default App;
