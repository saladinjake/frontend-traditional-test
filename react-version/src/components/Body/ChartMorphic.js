import React from 'react';

    function drawChart() {
            // Define the chart to be drawn.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Training sessions');
            data.addColumn('number', 'Team meetings');
            data.addColumn('number', 'Medical checks');
            data.addColumn('number', 'More sample');
            data.addColumn('number', 'More samples 2');
            data.addRows([
               ['',  7.0, 0.2, 0.9, 3.9],
               ['',  6.9, 0.8, 0.6, 4.2],
               ['',  9.5,  5.7, 3.5, 5.7],
               ['',  1.5, 4.3, 8.4, 8.9],
               ['',  0.2, 7.0, 5.5, 9.9],
               ['',  1.5, 2.0, 7.0, 5.2],
               
               ['',  5.2, 4.8, 1.6, 7.0],
               ['',  6.5, 4.1, 1.9, 6.6],
               ['',  3.3, 2.1, 1.3, 4.2],
               ['',  8.3, 4.1, 1.0, 0.3],
               ['',  3.9,  1.6, 0.9, 6.6],
               ['',  9.6,  2.5,  1.0, 0.8]
            ]);
            
            // Set chart options
            var options = {
               hAxis: {
                  title: ''
               },
               vAxis: {
                  title: ''
               },   
               'width':350,
               'height':400,
                // Colors only the chart area, with opacity
          chartArea: {
            backgroundColor: {
              fill: '#333',
              fillOpacity: 0.1
            }
           },
           // Colors the entire chart area, simple version
      // backgroundColor: '#FF0000',
      // Colors the entire chart area, with opacity
      backgroundColor: {
        fill: '#333',
        fillOpacity: 0.8
      },
               curveType: 'function'
            };

            // Instantiate and draw the chart.
            var chart = new google.visualization.LineChart(document.getElementById('container-display'));
            chart.draw(data, options);
}
export default class Chartmorphic extends React.Component {
  componentDidMount(){
    google.charts.load('current', {packages: ['corechart','line']});

         
    document.addEventListener("DOMContentLoaded", ()=>{
      //Turn on the lights
      
      
       google.charts.setOnLoadCallback(drawChart);

    })
  }
  render() {
    return (
      <div className="col-md-7 ">
                <div className="card-box" style={{height:"500px"}}>
                  <div className="main-flex">
                    <h4>Half Year Work Results</h4>
                    <p className="padded">
                      <a href="#">Browse more</a>
                    </p>
                </div>

                <div id ="container-display" style ={{width: "300px", height: "200px", margin: "0 auto",background:"#333", marginLeft:"-20px"}}>
                </div>
            </div>

     </div>
    );
  }
}
