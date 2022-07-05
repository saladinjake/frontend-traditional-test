import React, { useState, useEffect } from 'react'
import {  useGlobalContext } from "../../context"
const Logo = ({title}) => {
  const data = title.split(" ")
  const titleA = data[0];
  const titleB = data[1];
  return (
    <div class="topbar-left">
    <div class="text-center">
      <p>
        <a href="" class="logo">
          {' '}
          <span>{titleA}</span>{' '}
        </a>
      </p>
      <p>
        <a href="" class="logo">
          {' '}
          <span>{titleB}</span>{' '}
        </a>
      </p>
    </div>
  </div>)
}

const SearchBox = () =>{
  return ( 
    <form role="search" class="navbar-left search-api pull-left hidden-xs">
        <input type="text" placeholder="Search" class="form-control" />
        <a href="">
          <i class="fa fa-search"></i>
        </a>
      </form>
      )

  
}

const Navigations = ({ date}) => {
  const { user } = useGlobalContext();
  return (
      <div class="container">
        <ul class="nav navbar-nav navbar-right pull-right">
          <li class="dropdown top-menu-item-xs">
            <a href="" class="text-custom header-title  hidden-xs">
             {date}
            </a>
          </li>

         <SearchBox/>

          <li class="dropdown top-menu-item-xs">
            <div class="two-colsets">
              <div class="list-columnset" style={{
                marginRight:"4px"
              }}>
                <p class="margin-space right-text">{user?.name}</p>
                <p class="margin-space right-text">{user?.role}</p>
              </div>
              <a href="" class=" profile  waves-light ">
                <img src={user?.profileImage} alt="user-img" class="img-circle" />{' '}
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
    <div class="topbar" style={{
       marginTop:"-4px"
    }}>
      <Logo title={"Sport Time"}/>
      <div class="navbar navbar-default" role="navigation">
        <Navigations
           date={dateFormat()}
           
         />
      </div>
    </div>
  )
}

export default Header
