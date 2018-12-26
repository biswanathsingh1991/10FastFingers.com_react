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
      time : state.time -1,
    }
    case "show_display" :
    return{
      ...state,
      timer_display: true
    }
    default: return state
  }
}

const typingBoxInputTrackInitState = {
  input_space: false,
  previous_string: "",
  current_string: "",
  need_to_type_string_index: 0,
  current_string_correct: false,
  typed_string_correct: 0,
  typed_not_string_correct: 0,
  containerTxt_array: [],
  class_highlight:{},
}

const typingBoxInputTrack = (state=typingBoxInputTrackInitState , action) =>{
  switch(action.type){
    case "Input space":
    return{
      ...state,
      input_space: true,
      current_string: "",
      previous_string: state.current_string,
    }
    case "Input value":
    return{
      ...state,
      input_space: false,
      current_string: state.current_string+action.data,
    }
    case "matche":
    return{
      ...state,
      current_string_correct: true,
      typed_string_correct: ++state.typed_string_correct,
      class_highlight: {
        ...state.class_highlight,
        [action.data]: "text-success"
      }
    }
    case "covert to array":
    return{
      ...state,
      containerTxt_array: action.data,
    }
    case "update index":
    return{
      ...state,
      need_to_type_string_index: ++state.need_to_type_string_index ,
    }
    case "not matche":
    return{
      ...state,
      typed_not_string_correct: ++state.typed_not_string_correct,
      // class_highlight_array: state.class_highlight_array[state.need_to_type_string_index]="red"
      // class_highlight_array: state.class_highlight_array.push("red")
      class_highlight: {
        ...state.class_highlight,
        [action.data]: "text-danger"
      }

    }

    default: return state
  }
}

const rootreducer = combineReducers({
  highscoreboxstatus,
  containerTxt,
  typingTimer,
  typingBoxInputTrack,
})


export{
  rootreducer,
}