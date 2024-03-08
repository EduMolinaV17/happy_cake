import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App