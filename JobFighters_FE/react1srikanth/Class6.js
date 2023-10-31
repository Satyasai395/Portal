import React,{useState} from "react";
function Class6(){
    const [count,setCount]=useState(0);
    const increment=()=>
    {
        setCount(count+2)
        //setCount(count+1)//no use
        /*setCount((prevcount)=>{
            return prevcount + 1;
        })
        setCount((prevcount)=> prevcount + 1)*/ // now both the function will work
    }
    const decrement=()=>
    {
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
        </div>

    );
}
export default Class6;