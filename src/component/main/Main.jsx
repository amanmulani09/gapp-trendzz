import React from 'react'
import Header from '../header/Header'
// import MainImg from "../assets/gappzz.jpg" 
import { useNavigate } from 'react-router-dom'
import "./main.css"
const main = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="MainImg">
        <img src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/69513030_1217066535133657_412847933122150400_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TxYq_lG4BIgAX-nyEws&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfBgAl7Op_zxxMSPcgHzaMOZNUqaoGf2uvL9-TG8LTxylw&oe=638F16C6"></img>
        {/* <span>Here the All TrenZZZ are...</span> */}

        <button className='ExpBtn' onClick={()=>{navigate("/product")}}>Explore TrendZZZ</button>
      </div>
    </>
  )
}

export default main