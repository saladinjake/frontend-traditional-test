import React, { useState, useEffect } from "react"
import {  useGlobalContext } from "../../context"
import { getContacts } from "../../data/api"
const WelcomeMessage =() =>{
  const state = useGlobalContext();
  const { user, welcomeMsg } = state
  console.log(state)
  return (
    
    <div className="col-md-12 card-box-painted">
      <div className="col-md-8">
        <h4>Good morning, {user.name}</h4>
        <p>
          {welcomeMsg}
        </p>

        <button className="btn btn-md btn-white">+ create event</button>
      </div>

      <div className="col-md-6 background-girl">
        <div className=""></div>
        <div className="football"></div>
      </div>
    </div>
  )
}

const Reminders = () =>{
  return (
    <div className="col-md-4 ">
                <div className="card-box">
                  <h4>Reminder</h4>

                  <div className="two-colsets">
                    <label className="switcher">
                      <input className="switch-itch" type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <div className="list-columnset">
                      <p className="margin-space">Training session</p>
                      <p className="margin-space">10.00am</p>
                    </div>
                  </div>

                  <div className="two-colsets">
                    <label className="switcher">
                      <input className="switch-itch" type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <div className="list-columnset">
                      <p className="margin-space">Team meetings</p>
                      <p className="margin-space">1.00pm</p>
                    </div>
                  </div>

                  <button className="btn btn-md btn-dark centered center">+ Add new</button>
                </div>
              </div>

  )
}


const Contacts = () => {
  const [ userContacts, setContacts] = useState([])
  useEffect(() =>{
    async function loadContacts(){
      try{
          const resource = await getContacts();
          setContacts(resource)
          console.log(resource)
       }catch(err){
         console.log(err)
       }
    }
    loadContacts()
   
  },[])

  const renderContacts = (data) =>{

    return data.map(userContact =>{
      return (
         
                  <div className="main-flex">
                    <div className="two-colsets">
                      <a href="" className=" profile  waves-light ">
                        <img
                          src={userContact.profile}
                          alt="user-img"
                          className="img-circle"
                        />{' '}
                      </a>
                      <div className="list-columnset">
                        <p className="margin-space">{userContact.name}</p>
                        <p className="margin-space">{userContact.role}</p>
                      </div>
                    </div>

                    <i className="right fa fa-ellipsis-h"></i>
                  </div>

      )
    })
    
  }
  return (
    <div className="col-md-5 ">
      <div className="card-box-no-fixed-height">
      <div className="main-flex">
        <h4>Contacts</h4>
        <p className="padded">
          <a href="#">view all</a>
        </p>
      </div>

      {userContacts.length > 0 && renderContacts(userContacts)}


    </div>
  </div>


  )
}


const ChartMorphic = () =>{
   return (

      <div className="col-md-7 ">
                <div className="card-box-no-fixed-height">
                  <div className="main-flex">
                    <h4>Half Year Work Results</h4>
                    <p className="padded">
                      <a href="#">Browse more</a>
                    </p>

                    <div className="line-chart-block block">
                      <div className="line-chart">
                        <div className="draw-graph">
                          <ul className="eje-y">
                            <li data-ejeY="10"></li>
                            <li data-ejeY="7.5"></li>
                            <li data-ejeY="5"></li>
                            <li data-ejeY="2.5"></li>
                            <li data-ejeY="1"></li>
                            <li data-ejeY="0"></li>
                          </ul>
                          <ul className="eje-x">
                            <li>
                              <span className="dot2"></span>Training sessions
                            </li>
                            <li>
                              <span className="dot1"></span>Team meetings
                            </li>
                            <li>
                              <span className="dot3"></span>Medical checks
                            </li>
                          </ul>

                          <svg width="500" id="svg-1" height="90" />
                          <svg width="200" id="svg-2" height="140" />
                          <svg width="100" id="svg-3" height="70" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   )
}

const Body = ({
  pageTitle,
  children
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">{pageTitle}</h4>
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-md-12">
          <div className="col-md-8">
            <div className="col-md-12">
              <div className="col-md-8 ">
                <WelcomeMessage />
              </div>

              <Reminders />
              <Contacts />

              <ChartMorphic/>
              
              
            </div>
          </div>

          <div className="col-md-4 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
