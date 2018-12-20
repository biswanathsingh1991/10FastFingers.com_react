import { combineReducers } from 'redux'

const initState ={
  highscoreactivatebox : "topranking"
}

const highscoreboxstatus = (state=initState, action) => {
  if (action.type === "updatebox"){
    return{
      ...state,
      highscoreactivatebox: action.activateStatus
    }
  }
  return state;
}

const containerTxt = (state=0, action) =>{
  switch(action.type){
    case "requstTxt":
      return{
        ...state,
        containerTxt_request: true
      }
    case "reciveTxt":
      return{
        ...state,
        containerTxt_recive: true,
        txt : action.txt,
      }
    default: return state
  }
}

const timerInitReducer= (state=0,action) =>{
  switch(action.type){
    case "timerinit":
    return{
      ...state,
      init_timer: 60
    }
    default:
    return state
  }
}


const rootreducer = combineReducers({
  highscoreboxstatus,
  containerTxt,
  timerInitReducer,
})


export{
  rootreducer,
}