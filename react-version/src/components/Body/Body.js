import React, { useState, useEffect } from "react"
import {  useGlobalContext } from "../../context"
import { getContacts } from "../../data/api"
const WelcomeMessage =() =>{
  const state = useGlobalContext();
  const { user, welcomeMsg } = state
  console.log(state)
  return (
    
    <div class="col-md-12 card-box-painted">
      <div class="col-md-8">
        <h4>Good morning, {user.name}</h4>
        <p>
          {welcomeMsg}
        </p>

        <button class="btn btn-md btn-white">+ create event</button>
      </div>

      <div class="col-md-6 background-girl">
        <div class=""></div>
        <div class="football"></div>
      </div>
    </div>
  )
}

const Reminders = () =>{
  return (
    <div class="col-md-4 ">
                <div class="card-box">
                  <h4>Reminder</h4>

                  <div class="two-colsets">
                    <label class="switcher">
                      <input class="switch-itch" type="checkbox" />
                      <span class="slider"></span>
                    </label>
                    <div class="list-columnset">
                      <p class="margin-space">Training session</p>
                      <p class="margin-space">10.00am</p>
                    </div>
                  </div>

                  <div class="two-colsets">
                    <label class="switcher">
                      <input class="switch-itch" type="checkbox" />
                      <span class="slider"></span>
                    </label>
                    <div class="list-columnset">
                      <p class="margin-space">Team meetings</p>
                      <p class="margin-space">1.00pm</p>
                    </div>
                  </div>

                  <button class="btn btn-md btn-dark centered center">+ Add new</button>
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
         
                  <div class="main-flex">
                    <div class="two-colsets">
                      <a href="" class=" profile  waves-light ">
                        <img
                          src={userContact.profile}
                          alt="user-img"
                          class="img-circle"
                        />{' '}
                      </a>
                      <div class="list-columnset">
                        <p class="margin-space">{userContact.name}</p>
                        <p class="margin-space">{userContact.role}</p>
                      </div>
                    </div>

                    <i class="right fa fa-ellipsis-h"></i>
                  </div>

      )
    })
    
  }
  return (
    <div class="col-md-5 ">
      <div class="card-box-no-fixed-height">
      <div class="main-flex">
        <h4>Contacts</h4>
        <p class="padded">
          <a href="#">view all</a>
        </p>
      </div>

      {userContacts.length > 0 && renderContacts(userContacts)}


    </div>
  </div>


  )
}

const Body = ({
  pageTitle
}) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4 class="page-title">{pageTitle}</h4>
        </div>
      </div>
      <br />
      <br />

      <div class="row">
        <div class="col-md-12">
          <div class="col-md-8">
            <div class="col-md-12">
              <div class="col-md-8 ">
                <WelcomeMessage />
              </div>

              <Reminders />
              <Contacts />
              
              <div class="col-md-7 ">
                <div class="card-box-no-fixed-height">
                  <div class="main-flex">
                    <h4>Half Year Work Results</h4>
                    <p class="padded">
                      <a href="#">Browse more</a>
                    </p>

                    <div class="line-chart-block block">
                      <div class="line-chart">
                        <div class="draw-graph">
                          <ul class="eje-y">
                            <li data-ejeY="10"></li>
                            <li data-ejeY="7.5"></li>
                            <li data-ejeY="5"></li>
                            <li data-ejeY="2.5"></li>
                            <li data-ejeY="1"></li>
                            <li data-ejeY="0"></li>
                          </ul>
                          <ul class="eje-x">
                            <li>
                              <span class="dot2"></span>Training sessions
                            </li>
                            <li>
                              <span class="dot1"></span>Team meetings
                            </li>
                            <li>
                              <span class="dot3"></span>Medical checks
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
            </div>
          </div>

          <div class="col-md-4 ">
            <div class="row">
              <div class="col-md-12 ">
                <div class="container-calendar">
                  <h3 id="monthAndYear"></h3>

                  <div class="button-container-calendar">
                    <span id="previous">&#8249;</span>
                    <span id="next">&#8250;</span>
                  </div>

                  <table class="table-calendar" id="calendar" data-lang="en">
                    <thead id="thead-month"></thead>
                    <tbody id="calendar-body"></tbody>
                  </table>

                  <div class="main-flex">
                    <h4>Schedules</h4>
                    <p class="padded">
                      <a href="#">view all</a>
                    </p>
                  </div>

                  <div class="dynamic-listing bg-darkbrown">
                    <div class="main-flex">
                      <h4 class="badge badge-info">Team Meeting</h4>
                      <i class="right fa fa-ellipsis-h"></i>
                    </div>
                    <p>BD & Treatment Centre</p>
                    <p>4:15 pm - 6:00 pm</p>
                  </div>

                  <div class="dynamic-listing bg-darkbrown">
                    <div class="main-flex">
                      <h4 class="badge badge-info">Team Meeting</h4>
                      <i class="right fa fa-ellipsis-h"></i>
                    </div>
                    <p>BD & Treatment Centre</p>
                    <p>4:15 pm - 6:00 pm</p>
                  </div>

                  <div class="dynamic-listing bg-darkbrown">
                    <div class="main-flex">
                      <h4 class="badge badge-success">Team Meeting</h4>
                      <i class="right fa fa-ellipsis-h"></i>
                    </div>
                    <p>BD & Treatment Centre</p>
                    <p>4:15 pm - 6:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
