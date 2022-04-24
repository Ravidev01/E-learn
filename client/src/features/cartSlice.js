import { createSlice } from "@reduxjs/toolkit"
const initialState ={
    course:[]
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addCourse:(state,action)=>{
            console.log(action);
            state.course = [...state.course, action.payload]
        }

    }
})

export const {addCourse} = cartSlice.actions 
export default cartSlice.reducer