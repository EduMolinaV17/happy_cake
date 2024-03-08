import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
const Navigation = () => {
  return (
    <>
    <Navbar bg="danger" data-bs-theme="dark">
        <Nav className="me-auto justify-evenly">
            <Link to="/" className="text-white text-decoration-none ms-3" >🏠Home</Link>
            <Link to="/contacto" className="text-white text-decoration-none ms-3" >📒Contacto</Link>
          </Nav>
          <Navbar.Brand>Happy Cake🍰</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Navigation