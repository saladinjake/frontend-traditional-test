import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart , Line} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //Line,
  Title,
  Tooltip,
  Legend
)
const state = {
  labels: ['Training session', 'Team meetings', 'Medical checks',
           ],
  datasets: [
    {
      //label: 'Training session',
     // labels: [0, 1, 2, 3, 4, 5],
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [2, 4, 6, 8, 4]
    },

    {
     // label: 'Team meetings',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'purple',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1, 3, 5, 4, 9]
    },

    {
      //label: 'Medical checks',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'yellow',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [3, 7, 1, 8, 10]
    },

    


  ]
}

export default class Chartmorphic extends React.Component {
  render() {
    return (
      <div className="col-md-7 ">
                <div className="card-box" style={{height:"370px"}}>
                  <div className="main-flex">
                    <h4>Half Year Work Results</h4>
                    <p className="padded">
                      <a href="#">Browse more</a>
                    </p>
        <Line
        style={{height:"340px"}}
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
     </div>

     </div>
    );
  }
}
