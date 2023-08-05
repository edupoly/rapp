import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    tasks:['get phone','read paper','migrate moodle']
}

var todoSlice = createSlice({
    name:'todoR',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.tasks.push(action.payload)
        }
    }
})

export var {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
