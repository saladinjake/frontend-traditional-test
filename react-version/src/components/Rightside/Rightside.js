import React , { useEffect } from "react"
import CalendarModule from "../../helpers/CalendarModule"

const CallToAction = ({title}) =>(
 <div className="main-flex">
    <h4>{title}</h4>
    <p className="padded">
      <a href="#">view all</a>
    </p>
  </div>
)

const Events = ({title, brief, time, type}) => {
  return (	
  <div className="dynamic-listing bg-darkbrown">
    <div className="main-flex">
      <h4 className={"badge " +  `${type}`}>{title }</h4>
      <i className="right fa fa-ellipsis-h"></i>
    </div>
    <p>{brief}</p>
    <p>{time}</p>
  </div>
)
}
const RightSide = () => {

	useEffect(()=>{
		CalendarModule()
	},[])
	return (

     <div className="row">
              <div className="col-md-12 ">
                <div className="container-calendar">
                 

                  <div className="button-container-calendar">
                    
                  

					    <div className="main-flex">
					      <span id="previous">&#8249;</span>
					      <h3 id="monthAndYear"></h3>
					                   
					       <span id="next">&#8250;</span>
					    </div>
                  </div>



                  <table style={{padding:"20px", margin:"-10px"}} className="table-calendar" id="calendar" data-lang="en">
                    <thead id="thead-month"></thead>
                    <tbody id="calendar-body"></tbody>
                  </table>

                  <CallToAction title={"Schedules"} />

                  

                  <Events
                    title="Medical checks"
                    brief="BD & Treatment Centre"
                    time="4:15 pm - 6:00 pm"
                    type="badge-info" />


                  <Events
                    title="Team Meeting"
                    brief="BD & Treatment Centre"
                    time="4:15 pm - 6:00 pm"
                    type="badge-success" />


                  

                </div>
              </div>
            </div>
	)
}

export default RightSide