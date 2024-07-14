import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavbarPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const {pathname} = useLocation()



  return (
      <Navbar className="navbar" expand="lg" expanded={isNavbarOpen}>
        <Container fluid className="">
          <Navbar.Brand href="/checkoffweb" className="nav-logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/taxpay-logo-nav.svg`}
              height={68}
              width={157}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className=" border-0 noborder shadow-none"
          >
            {!isNavbarOpen ? (
              <img
                className="nav-icon"
                src={`${process.env.PUBLIC_URL}/assets/icons/open-nav.svg`}
                alt="logo"
              />
            ) : (
              <img
              className="nav-icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/close-nav.svg`}
              alt="logo"
            />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Link to="/" className="d-flex nav-left-data">
            <div className={pathname === "/" && "nav-active"}>For Individuals </div>
            </Link>
            <Link to="/business" className="d-flex nav-left-data">
            
            <div className={pathname === "/business" && "nav-active"}>For Businesses</div>
            </Link>
            <Nav
            className="me-auto my-2 my-lg-0 display-lap"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >   
          </Nav>
          <Link className="d-flex nav-right-data">
             About Us
            </Link>
             <Link className="d-flex nav-right-data">
             Contact
            </Link>
            <span className="d-flex nav-right-data-span">|</span>
            <Link className="d-flex nav-right-data">
            Login
            </Link>
            <Button
              className="btn btn-primary nav-right-btn w-100 p-3 shadow-none"
            >
             Create free account
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarPage;
