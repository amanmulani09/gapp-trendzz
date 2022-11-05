import { async } from '@firebase/util'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import profile from '../assets/profile.svg'
import profileIcon from '../assets/profileicon.png'
import './account.css'
export const Account = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    try {
      await logout()
      navigate('/login')
    }
    catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div className="Accountcontainer">
      <nav>

        <span className='logo'>GAPP-<span className='trendz'>Trendzz</span></span>

        <div className="leftLinks">

          <Link to="/" className="link left">Home</Link>
          <Link to="/product" className="link left" >Product</Link>
        </div>
        <Link to="/account" className="signupBtn link">{user.email ? `welcome ${user.email}` : null} </Link>
      </nav>
      <div className='account'>
        <div className="profileimage">

      <img src={profile} alt="" className='profile'/>
        </div>
      <div className="userinfo">

        <h4 className='userHeading'>hey! {user.email}</h4>
        <img src={profileIcon} alt="profileicon" className='userIcon' />
        <p className='userEmail'>User Email : {user.email} </p>

        <button onClick={handleLogOut} className="userLogout">Log out</button>
      </div>
      </div>
    </div>
  )
}
