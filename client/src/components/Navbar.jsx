import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/mypost">My Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex g-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-2" variant="outline-success">
              Search
            </Button>
            <Link to="/login">
              <Button variant="warning">Login</Button>
            </Link>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
