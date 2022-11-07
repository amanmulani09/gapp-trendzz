import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import Header from '../component/header/Header'
import './Login.css'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import svg from '../component/assets/login1.svg'
const login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  let guestEmail = 'guest@gmail.com';
  let guestPassword= 'guest@12345'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/account')
    }
    catch (e) {
      console.log(e.message)
    }
  }

  const guestLogin = async(e)=>{

    e.preventDefault();
    try{
      await signIn(guestEmail,guestPassword);
      navigate('/account')
    }
    catch(e){
      console.log(e.message)
    }
  }

  return (
    <div>
      {/* <nav>

        <span className='logo'>GAPP-<span className='trendz'>Trendzz</span></span>

        <div className="leftLinks">

          <Link to="/" className="link left">Home</Link>
          <Link to="/product" className="link left" >Product</Link>
        </div>
        
            <ul className="rightlinks">
                <Link to='/wishlist'><i class="fa-solid fa-heart"></i></Link>
                <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            </ul>
        <Link to="/signup" className="signupBtn link">Sign-up</Link>
      </nav> */}
      <Header />
      <div className="loginForm">
        <div className="asideLoginFrom">
          <img src={svg} alt="" className="loginsvg" />
        </div>


        <div className="mainloginFrom">
          <h2 className='wb'>Welcome Back </h2>
          <MDBContainer className="p-10 my-4 d-flex flex-column w-60 loginbox" >

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />

            <div className="d-flex justify-content-between mx-3 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />

            </div>

            <MDBBtn className="mb-8 loginSubmitBtn" onClick={handleSubmit}>Sign in</MDBBtn>
            <MDBBtn className="mb-8 guestlogin" onClick={guestLogin}>Guest Login</MDBBtn>

            <div className="text-center">
              <p className='notAMemberSignUp'>Not a member? <Link to="/signup">Register</Link></p>

            </div>

          </MDBContainer>
        </div>



      </div>
    </div>
  )
}

export default login