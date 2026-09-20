import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../featurs/counter/counterSlice';

const store = configureStore({
    reducer:{
          counter: counterReducer,
    }
});

export {store}