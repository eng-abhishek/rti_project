import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({

name:"counter",
initialState:{
value:0,
},
reducers:{
    increament:(state)=>{
        state.value = state.value + 1;
      //state.value += 1;
    },
    decrement:(state)=>{
        state.value = state.value - 1;
      //state.value -=  1;
    },
    incrementByAmount:(state,action)=>{
       state.value = state.value + action.payload;
     //state.value += action.payload;    
    }
}
});


// export auto generated action creators
export const {increament, decrement, incrementByAmount} = counterSlice.actions
 

// export the reducer function for use it in at time of configure store 
export default counterSlice.reducer