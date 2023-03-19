import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
     <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='logo' href="/">VirtualTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link className='paginas' href="/category/pcs">PC Armadas</Nav.Link>
            <Nav.Link className='paginas' href="/category/accesorios">Accesorios</Nav.Link>
            <Nav.Link className='paginas' href="/category/perifericos">Perifericos</Nav.Link>
            <Nav.Link className='paginas' href="/category/monitores">Monitores</Nav.Link>
            <Nav.Link className='paginas' href="/category/graficas">Placas de Video</Nav.Link>
            <Nav.Link className='paginas' href="/category/notebooks">Notebooks</Nav.Link>
            <Nav.Link className='paginas' href="/category/hardware">Hardware</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  )
}
