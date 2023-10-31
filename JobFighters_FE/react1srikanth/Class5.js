import React from "react";
const Class5=()=>{
    const clickhandle=(e)=>{
        //console.log(e);
        console.log("hello you clicked me",e);
    };
    const mousehandler=(e,name)=>{
        console.log("hello mousehandler",name,e);
    }
    return(
        <main className="container">
            <button className="button" onClick={clickhandle}>click me</button>
            <button className="button" onMouseOver={function(e){console.log('i am inner function',e)}}>click me</button>{/*inner function*/}
            <button className="button" onMouseLeave={function(e){return mousehandler(e,'satya');}}>click me</button>{} {/* anonymous function returning another function*/}
            <button className="button" onMouseMove={(e)=> mousehandler(e,'satya')}>click me</button>{} {/*arrow function returning another function*/}
            
    
        </main>
    );
}
export default Class5;