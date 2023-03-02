import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
import SideBar from '../../Components/SideBar/SideBar'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          {/* <SideBar/> */}
        </div>
        <MailList/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home