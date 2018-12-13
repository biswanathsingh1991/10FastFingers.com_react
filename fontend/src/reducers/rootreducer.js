const initState ={
  highscoreactivatebox : "topranking"
    
}


const rootreducer = (state=initState, action) => {
  if (action.type === "updatebox"){
    return{
      ...state,
      highscoreactivatebox: action.activateStatus
    }
  }
  return state;
}


export{
  rootreducer,
}