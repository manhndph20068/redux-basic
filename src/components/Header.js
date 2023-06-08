import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const listUser = useSelector((state) => state.user.listUsers);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              style={{ marginLeft: "50px" }}
              title={`(${listUser.length}) Users`}
              id="collasible-nav-dropdown"
            >
              {listUser &&
                listUser.length > 0 &&
                listUser.map((item, index) => {
                  return (
                    <NavDropdown.Item key={`${index}-users`}>
                      {item.email}
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
