import React,{useState,useEffect} from "react";
import axios from "axios";

function SearchFilter(){

  const [formData,setFormData] = useState('');
  const [suggessionList,setSuggessionList] = useState('');
  const [debouncingSearch, setDebouncingSearch] = useState('');

  useEffect(()=>{
  let timer;

  if(timer)  clearTimeout(timer);

  timer = setTimeout(()=>{
      setDebouncingSearch(formData);
  },1000);

  },[formData]);

 useEffect(()=>{
 
  if(debouncingSearch){

  const getData = async () => {
  const data = await axios.get(`https://dummyjson.com/users/search?q=${formData}`);
  const userInfo = data.data.users;
  console.log(userInfo);

  userInfo.map((value)=>{
    let fullname = `Name is ${value.firstName + value.lastName} and age is ${value.age}`;
    setSuggessionList(fullname);
  });

  }
  getData();
  }
  },[debouncingSearch]);

    return (<>
       <h1>Google Search</h1>    
        <div>
            <div>
                <input type="text" name="search" onChange={(e)=>setFormData(e.target.value)} />
                <p>{suggessionList}</p>
            </div>
        </div>
        </>);
}

export default SearchFilter;
