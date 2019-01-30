import fetch from 'cross-fetch';  
import axios from 'axios';

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
  return function(dispatch){
    dispatch(requestTxt())
    return fetch('http://127.0.0.1:8000/api/txt')
    .then(response => response.json(), error => console.log("Network error"))
    .then(json => dispatch(reciveTxt(json)))
  }
}

const authCredential = () =>{
  return{
    type: "authCredential",
  }
}

const authKey = (key) =>{
  return{
    type : "authKey",
    payload: key
  }
}


const authentication = (username, password) =>{
  return function(dispatch){
    dispatch(authCredential(username, password));
    return axios({
      method: 'post',
      url: "http://127.0.0.1:8000/rest-auth/login/",  
      data: {
        username: username,
        password: password
      },
      headers: {
          "Content-Type": 'application/json' ,
      }
    }
    ).then(res => dispatch(authKey(res.data.key)))
  }
} 

export{
  fetchTxt,
  authentication,
}