import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavBarApp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>ДЗ по React #2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Вход
            </Nav.Link>
            <Nav.Link as={Link} to="/Registration">
              Регистрация
            </Nav.Link>
            <Nav.Link as={Link} to="/Page404">
              Page 404
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
