import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import context from '../Cotntext/context';
const Api = () => {
    let [{data,setData},
        {},
        {query}] = useContext(context);
    
    useEffect( ()=>{
        async function handleapi(){
            const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+`${query||"harrypotter"}`)
            console.log(res.data);
            
            setData(res.data)
            
        }
        handleapi();
    },[query])
    return ( 
        <div>
        
        </div>
     );
}
 
export default Api;