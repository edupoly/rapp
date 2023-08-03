//counter state
const initialState = {
    count:0
}


//counter logic

function counterReducer(state=initialState,action){
    if(action.type==="INC"){
        return {count:state.count+1}
    }
    if(action.type==='DEC'){
        return {count:state.count-1}
    }
    if(action.type==='RESET'){
        return {count:initialState.count}
    }
    return state
}
export default counterReducer;