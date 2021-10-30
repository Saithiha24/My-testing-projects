import {configureStore} from '@reduxjs/toolkit';
import newsRedcuer from './redux/newsSlice';



export const store = configureStore({
    reducer:{
        news:newsRedcuer,
    }
})