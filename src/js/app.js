import CalendarModule from "./modules/Calendar"

function drawChartLines() {
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
	
	backgroundColor: {
	fill: '#333',
	fillOpacity: 0.8
	},
	   curveType: 'function'
	};

	// Instantiate and draw the chart.
	var chart = new google.visualization.LineChart(document.getElementById('container'));
chart.draw(data, options);
}
         
document.addEventListener("DOMContentLoaded", ()=>{
	//Turn on the lights
   const Calendar = new CalendarModule();
   google.charts.setOnLoadCallback(drawChartLines);

})