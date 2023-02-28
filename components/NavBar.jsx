import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
     <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='logo' href="#home">VirtualTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link className='paginas' href="#">PC Armadas</Nav.Link>
            <Nav.Link className='paginas' href="#">Accesorios</Nav.Link>
            <Nav.Link className='paginas' href="#">Perifericos</Nav.Link>
            <Nav.Link className='paginas' href="#">Monitores</Nav.Link>
            <Nav.Link className='paginas' href="#">Placas de</Nav.Link>
            <Nav.Link className='paginas' href="#">Notebooks</Nav.Link>
            <Nav.Link className='paginas' href="#">Hardware</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  )
}
