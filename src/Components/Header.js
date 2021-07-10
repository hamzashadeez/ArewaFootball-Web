import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import YouTubeIcon from '@material-ui/icons/YouTube';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from "react-router-dom";
import {userState} from '../Recoil/UserState'
import { useRecoilState } from "recoil";

function Header() {
  const [user, setUser] = useRecoilState(userState)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      sticky="top"
      className="mb-3"
      variant="dark"
    >
      <Navbar.Brand href="/" className='navB'>ArewaFootBall</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{fill:'burlywood'}} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link ><Link className='anchor' to='/'><ForumIcon className='mr-1' />Feeds</Link></Nav.Link>
          <Nav.Link><Link className='anchor' to='/highlights'><YouTubeIcon className='mr-1' />Highlights</Link></Nav.Link>
          <Nav.Link ><Link className='anchor' to={user === null ? "/login" : '/profile' }><AccountCircleIcon className='mr-1' />Log In</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
