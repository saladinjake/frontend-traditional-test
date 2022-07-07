import CalendarModule from "./modules/Calendar"

//switched to d3 js
// function drawChartLines() {
// // Define the chart to be drawn.
// 	let data = new google.visualization.DataTable();
// 	data.addColumn('string', 'Training sessions');
// 	data.addColumn('number', 'Team meetings');
// 	data.addColumn('number', 'Medical checks');
// 	data.addColumn('number', 'More sample');
// 	data.addColumn('number', 'More samples 2');
// 	data.addRows([
// 	   ['',  7.0, 0.2, 0.9, 3.9],
// 	   ['',  6.9, 0.8, 0.6, 4.2],
// 	   ['',  9.5,  5.7, 3.5, 5.7],
// 	   ['',  1.5, 4.3, 8.4, 8.9],
// 	   ['',  0.2, 7.0, 5.5, 9.9],
// 	   ['',  1.5, 2.0, 7.0, 5.2],
	   
// 	   ['',  5.2, 4.8, 1.6, 7.0],
// 	   ['',  6.5, 4.1, 1.9, 6.6],
// 	   ['',  3.3, 2.1, 1.3, 4.2],
// 	   ['',  8.3, 4.1, 1.0, 0.3],
// 	   ['',  3.9,  1.6, 0.9, 6.6],
// 	   ['',  9.6,  2.5,  1.0, 0.8]
// 	]);

// 	// Set chart options
// 	let options = {
// 	   hAxis: {
// 	      title: ''
// 	   },
// 	   vAxis: {
// 	      title: ''
// 	   },   
// 	   'width':350,
// 	   'height':400,
// 	    // Colors only the chart area, with opacity
// 	  chartArea: {
// 	    backgroundColor: {
// 	      fill: '#333',
// 	      fillOpacity: 0.1
// 	    }
// 	   },
	
// 	backgroundColor: {
// 	fill: '#333',
// 	fillOpacity: 0.8
// 	},
// 	   curveType: 'function'
// 	};

// 	// Instantiate and draw the chart.
// 	let chart = new google.visualization.LineChart(document.getElementById('container'));
//     chart.draw(data, options);
// }
         
document.addEventListener("DOMContentLoaded", ()=>{
	//Turn on the lights
   const Calendar = new CalendarModule();
   // google.charts.setOnLoadCallback(drawChartLines);

	var width = 600,
	  height = 300,
	  margin = 50;

	var svg = d3.select('#container')
	  .append('svg')
	  .style({
	    'width': width + 2 * margin,
	    'height': height + 2 * margin
	  });

	var g = svg.append('g')
	  .attr('transform', 'translate(' + margin + ', ' + margin + ')');

	var sine = d3.range(0, 10).map(function(k) {
	  var value = [0.5 * k * Math.PI, Math.sin(0.5 * k * Math.PI)];
	  return value;
	});

	var xScale = d3.scale.linear()
	  .range([0, width - margin])
	  .domain(d3.extent(sine, function(d) {
	    return d[0];
	  }));

	var yScale = d3.scale.linear()
	  .range([height - margin, 0])
	  .domain([-1, 1]);

	var xAxis = d3.svg.axis()
	  .scale(xScale)
	  .orient('bottom');

	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  .orient('left');

	var line = d3.svg.line()
	  .x(function(d) {
	    return xScale(d[0]);
	  })
	  .y(function(d) {
	    return yScale(d[1]);
	  });

	g.append('path')
	  .datum(sine)
	  .attr('d', line.interpolate('basis'))
	  .attr({
	    'stroke': 'red',
	    'stroke-width': 1,
	    fill: 'none'
	  });

	g.append('g')
	  .classed('axis', true)
	  .attr('transform', 'translate(0, ' + (height - margin) + ')')
	  .call(xAxis);

	g.append('g')
	  .classed('axis', true)
	  .call(yAxis);




   
})