import React, { useState } from "react";
import axios from "axios";
function Class10(){
    const [firstname,setfirstname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState(''); 
    const [confirmpassword,setconfirmpassword]=useState('');  
    /* //-----too much repeated code 
     const changefirsname=(e)=>{
        // console.log(e)
        console.log(e.target.value);
        setfirstname(e.target.value)
    };
    const changeemail=(e)=>{
        // console.log(e)
        console.log(e.target.value);
        setemail(e.target.value)
    };
    const changepassword=(e)=>{
        // console.log(e)
        console.log(e.target.value);
        setpassword(e.target.value)
    }; */
    const handleinputchanges=(e,name)=>{
        console.log(e.target.value,name);
        if(name==='firstname'){
            setfirstname(e.target.value);
        }
        else if(name==='email'){
            setemail(e.target.value);
        }
        else if(name==='password'){
            setpassword(e.target.value);
        }
        else if(name==='confirmpassword'){
            setconfirmpassword(e.target.value);
        }
    }



    const handleSubmit=(e)=>{
        e.preventDefault();
        //to send objj to api
        let userObj ={
            firstname:firstname,
            email:email,
            password:password,
            confirmpassword:confirmpassword,    
        };
        
        console.log(userObj)
        axios.post('http://127.0.0.1:8000/api1/postdata/',[userObj]).then(
            (resp)=>{console.log(resp)}
        ).catch((error)=>{console.log(error)})
        
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <div>
                    <input type="text" name="firstname" id="firstname" placeholder="enter your name" value={firstname} /* onChange={changefirsname} */ onChange={(e)=>handleinputchanges(e,"firstname")}/>
                    </div><br></br>
                    <div >
                        <input type="email"name="email"id="email"placeholder="enter your email" value={email} /* onChange={changeemail} */ onChange={(e)=>handleinputchanges(e,'email')}/>
                        </div><br></br>
                        <div>
                            <input type="password" name="password" id="password" placeholder="enter your password" value={password} /* onChange={changepassword} */  onChange={(e)=>handleinputchanges(e,'password')}/>
                            </div><br></br>
                            <div>
                            <input type="password" name="confirmpassword" id="confirmpassword" placeholder="enter your password again" value={confirmpassword} /* onChange={changepassword} */  onChange={(e)=>handleinputchanges(e,'confirmpassword')}/>
                            </div>    
                            <button type="submit">submit</button>
                </div>  
            </form>
        </div>
    );

}
export default Class10;