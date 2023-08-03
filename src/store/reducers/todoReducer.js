//todo state
const initialState = {
    todos:["carwash","office rent","house rent","bus fee"]
}

function todoReducer(state=initialState,action){
    if(action.type==="ADDTODO"){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state;
}

export default todoReducer;