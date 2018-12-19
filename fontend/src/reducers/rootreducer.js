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
        containerTxt_recive: true
      }
    default: return state
  }

}


const rootreducer = combineReducers({
  highscoreboxstatus,
  containerTxt
})


export{
  rootreducer,
}