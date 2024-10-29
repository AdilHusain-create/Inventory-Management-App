import { Navbar, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div classNameName="container-fluid ms-auto d-flex">
        <div>
          <a className="navbar-brand">Inventory Managemnt System</a>
          <Button variant="primary">
            Product In Stock <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </div>
        <form className="inline d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
  // return (
  //   <Navbar bg="dark" expand="lg" variant="dark">
  //     <Navbar.Brand href="#home">Inventory Management App</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="mr-auto">
  //         <Badge className="mt-2" variant="primary">
  //           Products In stock
  //         </Badge>
  //       </Nav>
  //       <Form inline className="ms-auto d-flex">
  //         <Link to="/addproduct" className="btn btn-primary btn-sm mr-4">
  //           Add Product
  //         </Link>
  //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //         <Button type="submit" variant="outline-primary">
  //           Search
  //         </Button>
  //       </Form>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
};
export default NavBar;
