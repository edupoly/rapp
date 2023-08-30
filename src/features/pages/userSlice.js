import { createSlice } from '@reduxjs/toolkit'
const initialState= {
    user:{
        phonenumber:123123,
        password:999
    }
}
var userSlice = createSlice({
    name:"userR",
    initialState,
    reducers:{
        updateUser:(state,action)=>{
            state.user={...action.payload}
        },
        resetUser:(state)=>{
            state.user={};
        }
    }
})

export var {updateUser,resetUser} = userSlice.actions;
export default userSlice.reducer;