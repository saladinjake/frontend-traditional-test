import React, { useState, useEffect } from 'react'
import {  useGlobalContext } from "../../context"
const Logo = ({title}) => {
  const data = title.split(" ")
  const titleA = data[0];
  const titleB = data[1];
  return (

     <div className="topbar-left">
                    <div className="text-center">
                        <p className="logo"> <span>{titleA}</span> </p>
                        <p className="logo"><span>{titleB}</span></p>

                       
                    </div>
                </div>
   )
}

const SearchBox = () =>{
  return ( 
    <form role="search" className="navbar-left search-api pull-left hidden-xs">
        <input type="text" placeholder="Search" className="form-control" />
        <a href="">
          <i className="fa fa-search"></i>
        </a>
      </form>
      )

  
}

const Navigations = ({ date}) => {
  const { user } = useGlobalContext();
  return (
      <div className="container">
        <ul className="nav navbar-nav navbar-right pull-right">
          <li className="dropdown top-menu-item-xs">
            <a href="" className="text-custom header-title  hidden-xs">
             {date}
            </a>
          </li>

         <SearchBox/>

          <li className="dropdown top-menu-item-xs">
            <div className="two-colsets">
              <div className="list-columnset" style={{
                marginRight:"4px"
              }}>
                <p className="margin-space right-text">{user?.name}</p>
                <p className="margin-space right-text">{user?.role}</p>
              </div>
              <a href="" className=" profile  waves-light ">
                <img src={user?.profileImage} alt="user-img" className="img-circle" />{' '}
              </a>
            </div>
          </li>
        </ul>
      </div>
)

}

const Header = () => {
  
  const today = new Date();
  const dateFormat = () => {
    const months = ["January", "Febuary", 
                    "March", "April", "May",
                    "June", "July","August",
                    "September","October","November",
                    "December"
                   ]
    const todaysDate = ""+ months[today.getMonth()+1] + " " + today.getDate()+ ", "+ today.getFullYear() 
    return todaysDate;
  }
  return (
    <div className="topbar" style={{
       marginTop:"-4px"
    }}>
      <Logo title={"Sport Time"}/>
      <div className="navbar navbar-default" role="navigation">
        <Navigations
           date={dateFormat()}
           
         />
      </div>
    </div>
  )
}

export default Header
