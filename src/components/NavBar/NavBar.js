import React ,{useState} from "react";
import "./navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()
  const [isActive,setIsActive]=useState('home')

  const handleLogut = async()=>{
    try{
      await logOut();
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Link to='/' onClick={()=>setIsActive('home')} ><img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        /></Link>
          
          <Navbar.Toggle style={{color:"#111"}} ><i style={{color:"white"}} className="fa-solid fa-bars"></i></Navbar.Toggle>
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' onClick={()=>setIsActive('home')} className={isActive=='home'?"active nav-element":"nav-element"} >Home</Link>
              <Link to='/TV' onClick={()=>setIsActive('tv')} className={isActive=='tv'?"active nav-element":"nav-element"} >TV</Link>
              <Link to='/movies' onClick={()=>setIsActive('movies')} className={isActive=='movies'?"active nav-element":"nav-element"} >Movies</Link>
              <Link to='/account' onClick={()=>setIsActive('mylist')} className={isActive=='mylist'?"active nav-element":"nav-element"} >My Lists</Link>
            </Nav>
            {
              user?.email?
              <>
                <Link onClick={()=>setIsActive('signin')} to='/account' className="signIn" >Account</Link>
                <Link onClick={handleLogut} className="signUp" ><button>Log Out</button></Link>
              </>:
              <>
                <Link onClick={()=>setIsActive('signin')} to='/signin' className="signIn" >Sign In</Link>
                <Link onClick={()=>setIsActive('signup')} to='/signup' className="signUp" ><button>Sign Up</button></Link>
              </>
            }
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
