import axios from 'axios';



const fatchUserId = (token) =>{
	return function(){
		axios({
		method: 'GET',
		url: "http://127.0.0.1:8000/api/userid/",
		headers: {
			'Authorization': 'Token '+token,
		}
		}).then(res=> console.log(res))
		.catch(e=>console.log(e))
	}
}


export{
  fatchUserId,
}