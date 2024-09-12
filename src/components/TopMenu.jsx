import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginBtn from '../pages/LoginBtn';

const TopMenu=()=>{
 const MyData=useSelector((state)=>state.addCart.cart);
 console.log(MyData);
 const DataCount= MyData.length;
 const navigate= useNavigate();

 const [searchData, setSearchData]= useState("");


 const myCart=()=>{
  navigate("/mycart");
 }

 const handleSearch=()=>{
   navigate(`searchproduct/${searchData}`);
 }


  return(
        <>
        <div id="topmenu">
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
           <img src={logo} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="services">Services</Nav.Link>
            <Nav.Link  as={Link}  to="products">Products</Nav.Link>
            <Nav.Link   as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as={Link}  to="offer">Offer</Nav.Link>
            <Nav.Link as={Link}  to="blog">Blog</Nav.Link> 
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="kidswatches"> Kids Wear's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="menwatches"> Mens Wear's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="womenwatches">Women Wear's</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="prewatches">
                Premium Wear's
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">
              <input type="text" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} />
            </Nav.Link>
            <Nav.Link href="#deets">
            <IoSearch onClick={handleSearch} />
            </Nav.Link>
            <Nav.Link href="#deets">
            <FaUser  onClick={LoginBtn}/>
            </Nav.Link>
            <Nav.Link  href="#memes">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a>

             {DataCount<=0?"": 
             <span style={{padding:"2px", borderRadius:"50%", marginLeft:"5px", border:"1px solid grey", backgroundColor:"lightblue"}}> {DataCount}</span> }
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
        </>
    )
}

export default TopMenu;