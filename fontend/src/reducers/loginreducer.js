
const init ={
  username: "",
  password: "",
  key: "",
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
    case "authKey":
      return{
        ...state,
        key:action.payload
      }

    default: return state;

  }
}




export default loginreducer;