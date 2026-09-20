import React,{useEffect,useState} from "react";

function LifeCycle(){

  const[count,setCount] = useState(0);

  useEffect(()=>{
    console.log('Component Mouinting');
  },[]);
  // An empty dependency array [] triggers this only on initial render.

  useEffect(()=>{
    console.log('componemt is Updating');
  },[count]);
  // Runs on mount AND whenever 'count' updates.

  useEffect(()=>{
    return () => 
    {
     console.log('componet UnMounting');
    };
  },[]);
  // Combined with an empty array, the cleanup function runs strictly on unmount.
 // unmountComp();


 useEffect(()=>{
    console.log('i run on every render');
 })

  return(<>
      <h3>Function Based Component Life Cycle</h3>
      <button onClick={()=>{setCount(count+1)}}>Change Counter Value</button><br></br>
    </>);
}

export default LifeCycle;