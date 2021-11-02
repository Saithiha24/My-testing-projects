import {configureStore} from '@reduxjs/toolkit';
import newsRedcuer from './redux/newsSlice';
import serchReducer from './redux/serchSlice';



export const store = configureStore({
    reducer:{
        news:newsRedcuer,
        serch:serchReducer
    }
});