import CalendarModule from "./modules/Calendar"

document.addEventListener("DOMContentLoaded", ()=>{
	//Turn on the lights
   const Calendar = new CalendarModule();
  

const XMAX = 300;
const YMAX = 100;

const fillColors =["blue", "red", "purple","yellow"];

for (let i = 1; i <= fillColors.length; i++){
	// Create path instructions
	const path = [];
	for (let x = 0; x <= XMAX; x++) {
	    const angle = (x / XMAX) * Math.PI * 2 ;  // angle = 0 -> 2π
	    const y = Math.sin(angle) * (YMAX / 2) + (YMAX / 2) ;
	    // M = move to, L = line to
	    path.push((x == 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2));
	}

	// Create PATH element
	const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEl.setAttribute('d', path.join(' ') );
	pathEl.style.stroke = fillColors[i];
	pathEl.style.fill = 'none';

	// Add it to svg element
	document.querySelector('#svg-'+i).appendChild(pathEl);
	  
 }
})