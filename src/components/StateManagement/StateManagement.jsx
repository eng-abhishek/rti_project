import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increament,decrement,incrementByAmount} from '../../featurs/counter/counterSlice'

function StateManagement(){

 const count = useSelector((state)=> state.counter.value);
 const dispatch = useDispatch();

 return(
    <>
        <h1>Counter Slice ! Current Counter Is {count} </h1>
        <button onClick={()=>dispatch(increament())}>Increment</button> <br></br>
        <button onClick={()=>dispatch(decrement())}>Decrement</button> <br></br>
        <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By Amount</button> <br></br>
    </>
 );

}

export default StateManagement;