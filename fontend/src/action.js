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
    key: key
  }
}


const authentication = (state) =>{
  let username = state.loginreducer.username;
  let password = state.loginreducer.password;
  return function(dispatch){
    dispatch(authCredential(state.loginreducer.username, state.loginreducer.username))
    return fetch("http://127.0.0.1:8000/api/rest-auth/login",{
      method: 'POST',
      body: {
        username ,
        password
      }
    })
    .then(res=>dispatch(authKey(res)))
  }
} 

export{
  fetchTxt,
  authentication,
}