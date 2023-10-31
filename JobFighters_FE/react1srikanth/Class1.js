import React from "react";
function Date(){
    
    return(
        <section className="container">
            <h1>date: {new Date().toLocaleDateString()}</h1>
            <h1> Time: {new Date().toLocaleTimeString()}</h1>
            
        </section>
    );
}

function Class1(){
    const user={
        firstname:'satya',lastname:'pasupuleti'
    };
    function Person(){
        return <h1>hello {user.firstname}</h1>
    }
    function printName(user){
        return `my first name is ${user.firstname} ${user.lastname}`;
    }
    return(   
        <React.Fragment>
        <header>
            <h1>{printName(user)}</h1>
            <h1>{10+10}</h1>
        {/*<h1>hello world {firstname+'  '+lastname}</h1>*/}
        <p>loremakkjdsk djfdnckjfj</p>
        </header>
        <p>jdfhhhudjcjd</p>
        <img src="" alt="no"></img>
        <Person />
        <Person />
        <Person />
       
        </React.Fragment>
    );
    
}export default Class1;