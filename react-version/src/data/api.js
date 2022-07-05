export const getContacts = async () =>{
	const data = require("./data.json");
	return new Promise((resolve, reject)=>{
		if(data.length> 0){
			resolve(data)
		}else{
			reject("Error fetching data")
		}
	})
} 