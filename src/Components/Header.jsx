import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
        <Navbar.Brand href="#home" className=' fw-bolder'>
          <Link to={'/'} style={{textDecoration:"none",color:"red"}}> 
          <i class="fa-solid fa-play fa-beat me-3 fs-3"></i>
            Media-Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
