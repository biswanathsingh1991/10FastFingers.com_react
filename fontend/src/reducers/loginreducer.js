
const init ={
  username: "",
  password: ""
}

const loginreducer = (state=init, action) =>{
  switch (action.type){
    case "username":
      return{
        ...state,
        username: action.payload
      }
    case "password":
      return{
        ...state,
        password: action.payload
      }

    default: return state;
  }
}




export default loginreducer;