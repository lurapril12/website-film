import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">LURRYFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#horor">HOROR</Nav.Link>
            <Nav.Link href="#action">ACTION</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar