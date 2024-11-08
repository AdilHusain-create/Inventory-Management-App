import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body d-flex"
      data-bs-theme="dark"
    >
      <div className="d-flex me-2">
        <a className="navbar-brand">
          <h4>Inventory Managemnt System</h4>
        </a>
        <div className="ms-auto d-flex align-items-center">
          <Button className="me-4" variant="primary">
            Product in Stock - <Badge bg="secondary">4</Badge>
          </Button>
          <form className="d-flex me-auto" role="search">
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
      </div>
    </nav>
  );
};
export default NavBar;
