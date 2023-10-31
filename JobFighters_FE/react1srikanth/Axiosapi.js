import { useEffect, useState } from "react";
import axios from 'axios';
function MainInput(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/getemployees/',setdata).then(
            (resp)=>{setdata(resp.data)}
        ).catch((error)=>{console.log(error);
        })
    },[]);
    

    return(
        <div>
         {
         data.map((obj)=>{
            return <h2 key={obj.empno}> {obj.empno} {obj.empname}  {obj.salary}</h2>;
         })
         }
          <button onClick={createemployee}> create employee</button>
        </div>  
    );

    function createemployee(){
        axios.post('http://127.0.0.1:8000/api/getemployees/',[{'empno':8,'empname':'reddy','salary':12673}]).then(
            (resp)=>{console.log(resp)}
        ).catch((error)=>{console.log(error)})

    }
    
}
export default MainInput;