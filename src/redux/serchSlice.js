import { createSlice } from "@reduxjs/toolkit";

const serchSlice = createSlice({
    name:'serch',
    initialState:{text:'example'},
    reducers:{
        serchText:(state,{payload})=>{
        state.text = payload
        }
    }
});

export const {serchText} = serchSlice.actions;
export default serchSlice.reducer;
