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

const typingTimer = (state={time:60, timer_display:false},action) =>{
  switch(action.type){
    case "typingTimer":
    return{
      ...state,
      time : state.time -1
    }
    case "show_display" :
    return{
      ...state,
      timer_display: true
    }
    default: return state
  }
}

const rootreducer = combineReducers({
  highscoreboxstatus,
  containerTxt,
  typingTimer,
})


export{
  rootreducer,
}