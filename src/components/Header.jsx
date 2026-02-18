import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { IoBag, IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import { toast } from "react-toastify";






function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userAuthenticated} = useSelector((state)=>(state.userState))
 
  const {cartItems} = useSelector((state)=>state.productState)
 
  const logoutButton = () =>{
    dispatch(logOut())
    navigate("/login")
    toast.success("Logouted")
    
  }
  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <Image className="Logo-size" src="/public/Logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            

            {userAuthenticated ? (  
               <NavDropdown className="navdrop"
              title={<FaUserCircle size={16} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={"/users-list"}>
                Users List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/add-product">
                   Add Product
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/list-product">Product List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutButton } href="#action/3.4">
                Logout <IoLogOutOutline />
              </NavDropdown.Item>
            </NavDropdown>
             ):( 
              <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
             )}
         
            <Nav.Link as={Link} to="/cart-page" className="bag-nav">
              <IoBag /> <span className="bag-count">{cartItems.length}</span>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
