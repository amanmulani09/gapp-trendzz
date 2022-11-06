import React,{useState} from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../../context/AuthContext';
const Header = () => {

    let {user} = useAuth()
    let loggedInUser = user;

    const [navbar,setnavbar] = useState(false)

    window.addEventListener("scroll",()=>{
        if(window.scrollY >= 80){
            setnavbar(true)
        }else{
            setnavbar(false)
}
    })

    return (
        <>
        <nav className={navbar ? "nav active" : "nav"}>

        <span className='logo'>GAPP-<span className='trendz'>Trendzz</span></span>

            
            <div class="leftLinks">

            <Link to="/" class="link left">Home</Link>
            <Link to="/product" class="link left" >Product</Link>

            </div>
          {loggedInUser ? <Link to="/account" class="loginBtn link">Account</Link> : <Link to="/login" class="loginBtn link">Login</Link>}  

        </nav>

        </>
    )
}

export default Header

// <NavLink to="/" >Home</NavLink>