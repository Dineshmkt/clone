import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit"
type Value={
    name:string,
    email:string
}
const initialState:Value={
    name:"",
    email:""
}
const updateLoginSlice=createSlice({
    name:"LoginValue",
    initialState,
    reducers:{
        updateLogin:(state,action:PayloadAction<{name:string,email:string}>)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
        },
    },
})
export const {updateLogin} = updateLoginSlice.actions
export default updateLoginSlice.reducer