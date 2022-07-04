function CalenderModule(){
	function generate_year_range(start, end) {
	    let years = "";
	    for (let year = start; year <= end; year++) {
	        years += "<option value='" + year + "'>" + year + "</option>";
	    }
	    return years;
	}

	let today = new Date();
	let currentMonth = today.getMonth();
	let currentYear = today.getFullYear();
	let selectYear = document.getElementById("year");
	let selectMonth = document.getElementById("month");
    let createYear = generate_year_range( 1970, currentYear );
	//document.getElementById("year").innerHTML = createYear;
	let calendar = document.getElementById("calendar");
	let lang = calendar.getAttribute('data-lang');
	let months = "";
	let days = "";
	let monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	months = monthDefault;
	days = dayDefault;
	
	let $dataHead = "<tr>";
	for (let dhead in days) {
	    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
	}
	$dataHead += "</tr>";
	document.getElementById("thead-month").innerHTML = $dataHead;
	let monthAndYear = document.getElementById("monthAndYear");
	showCalendar(currentMonth, currentYear);
	function next() {
	    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	    currentMonth = (currentMonth + 1) % 12;
	    showCalendar(currentMonth, currentYear);
	}
	function previous() {
	    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
	    showCalendar(currentMonth, currentYear);
	}
	function showCalendar(month, year) {
	    let firstDay = ( new Date( year, month ) ).getDay();
	    let tbl = document.getElementById("calendar-body");
	    tbl.innerHTML = "";    
	    monthAndYear.innerHTML = months[month] + " " + year;
	    //selectYear.value = year;
	    //selectMonth.value = month;
	    let date = 1;
	    for ( let i = 0; i < 6; i++ ) {       
	        let row = document.createElement("tr");
	        for ( let j = 0; j < 7; j++ ) {
	            if ( i === 0 && j < firstDay ) {
	                let cell = document.createElement( "td" );
	                let cellText = document.createTextNode("");
	                cell.appendChild(cellText);
	                row.appendChild(cell);
	            } else if (date > daysInMonth(month, year)) {
	                break;
	            } else {
	                let cell = document.createElement("td");
	                cell.setAttribute("data-date", date);
	                cell.setAttribute("data-month", month + 1);
	                cell.setAttribute("data-year", year);
	                cell.setAttribute("data-month_name", months[month]);
	                cell.className = "date-picker";
	                cell.innerHTML = "<span>" + date + "</span>";

	                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
	                    cell.className = "date-picker selected";
	                }
	                row.appendChild(cell);
	                date++;
	            }
	        }
	        tbl.appendChild(row);
	    }
	}

	function daysInMonth(iMonth, iYear) {
	    return 32 - new Date(iYear, iMonth, 32).getDate();
	}
	
	const attachEvents = function(){
       	  const previousBtn = document.getElementById("previous");
       	  const nextBtn = document.getElementById("next");
       	  if(previousBtn){
       	  	 previousBtn.addEventListener("click", () =>{
       	  	   previous()
       	     })
       	  }
       	  
          if(previousBtn){
          	 nextBtn.addEventListener("click", () =>{
       	  	 next()
       	  })
          }
       	   
    }

   attachEvents()
}

export default CalenderModule;;
