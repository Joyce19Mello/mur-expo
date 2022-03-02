import logo from '../../logo.svg';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <div className="NavBar">
        <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#">Conheça o MUR</Nav.Link>
            <Nav.Link href="#">Conheça o EXPO</Nav.Link>
            <Nav.Link href="#">Faça sua inscrição</Nav.Link>
            <Nav.Link href="#">Patrocinadores</Nav.Link>
            <Nav.Link href="#">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default NavBar;
