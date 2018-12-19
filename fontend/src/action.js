import fetch from 'cross-fetch';  



const requestTxt = () =>{
  return{
    type: "requstTxt",
    txt :true
  }
}

const reciveTxt = (txt) =>{
  return{
    type : "reciveTxt",
    txt : txt,
    recivedAt: Date.now()
  }
}

const fetchTxt= () =>{

  return (dispatch) =>{
    dispatch(requestTxt())
    return fetch('http://127.0.0.1:8000/api/txt')
    .then(response => response.json())
    .then(json => console.log(json))
  
  }
  
}

export{
  fetchTxt,
}