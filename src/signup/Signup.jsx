import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import svg from '../component/assets/signup.svg'
import './signup.css'
import { useAuth } from '../context/AuthContext'

import {
  MDBContainer,
  MDBInput,
  MDBBtn,

}
  from 'mdb-react-ui-kit';

const Signup = () => {
  let guestEmail = 'guest@gmail.com';
  let guestPassword= 'guest@12345'
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
const {createUser,signIn} = useAuth();
const navigate= useNavigate();
  const handleSubmit = async(e)=>{
e.preventDefault();

try{
await createUser(email,password)
navigate('/account')
}
catch(e){
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

      <div className='signupForm'>
        <nav>

          <span className='logo'>GAPP-<span className='trendz'>Trendzz</span></span>


          <div className="leftLinks">

            <Link to="/" className="link left">Home</Link>
            <Link to="/product" className="link left" >Product</Link>

          </div>

          <Link to="/login" className="loginBtn link">log-in</Link>

        </nav>
        <div className="signup">
          <div className="asideLoginFrom">

            <img src={svg} alt="" className="loginsvgsignup" />
          </div>
          <div className="mainloginsignupFrom">
            <h2 >Sign up</h2>
            <MDBContainer className="p-10 my-4 d-flex flex-column w-60 loginbox" >

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
              <MDBBtn className="mb-8 loginSubmitBtn" onClick={handleSubmit}>Sign in</MDBBtn>
            <MDBBtn className="mb-8 guestlogin" onClick={guestLogin}>Guest Login</MDBBtn>

              <div className="text-center">
              <p>Already have an account? <Link to="/login">log-in</Link></p>

              </div>
              
            </MDBContainer>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Signup