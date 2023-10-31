import React,{useState} from "react";
function Class7(){
    
    
    /*const intialobj={
        firstname:'satya sai',lastname:'pasupuleti',age:24
    }
    //we can also give like this
    function intialobj(){
        return {firstname:'satya sai',lastname:'pasupuleti',age:24};
    }


    //const [data,setData]=useState(intialobj)
    */
   /*
   const [data,setData]=useState({firstname:'satya',lastname:'pasupuleti',age:34});
   const changefirstname=()=>{
    setData({...data,firstname:"sravani",}) //...data means spread operator
   }
   const changelastname=()=>{
    setData({...data,lastname:'pasupulettti'}) //...data means spread operator
   }

    return(
        <div>
            <h1>my name is {data.firstname}</h1>
            <button onClick={changefirstname}>change name</button>
            <h2>my last name is {data.lastname}</h2>
            <button onClick={changelastname}>lastname</button>
            <h3>age:{data.age}</h3>
        </div>

    ); 
    */
  ////=-----multiple state-----------------------
   
        const [firstname,setfirstname]=useState('emma')
        const [lastname,setlastname]=useState('watson')
        const age=24;

        const Changefirstname=()=>{
            setfirstname("sravani") 
           }
           const Changelastname=()=>{
            setlastname('pasupulettti') 
           }

           return(
            <div>
                <h1>my name is {firstname}</h1>
                <button onClick={Changefirstname}>change name</button>
                <h2>my last name is {lastname}</h2>
                <button onClick={Changelastname}>lastname</button>
                <h3>age:{age}</h3>
            </div>
    
        );


    
}
export default Class7;