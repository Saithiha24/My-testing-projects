import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState:{getNews:[]},
    reducers:{
        getAllNews:(state,{payload})=>{
            state.getNews=payload
        },
    }
});

export const {getAllNews} = newsSlice.actions;
export default newsSlice.reducer;