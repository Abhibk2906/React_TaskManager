export const defaultState={
    taskData:[],
    modalOpen:false
  }
export const reducer=(state,action)=>{
    if(action.type==="MOD"){
        return {
            ...state,
             modalOpen:action.payload
       }
    }
    if(action.type==="POST"){
        return {
            ...state,
             taskData:[action.payload]
       }
    }
    if(action.type==="PUT"){
        return {
            ...state,
             taskData:[action.payload]
       }
    }
    return state
}