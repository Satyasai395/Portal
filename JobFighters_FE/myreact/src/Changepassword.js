import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


function Changepassword(){
    const [password, passwordchange] = useState("");
    const [newpassword, newpasswordchange] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const navigate = useNavigate();
    const Changepasswordfunction=(e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        console.log("ok")
        if (password===newpassword){
            
        axios.post('http://127.0.0.1:8000/api1/forgetdata/',[{'password':password,'newpassword':newpassword}]).then(
            (resp)=>{
                console.log(resp);
                if (resp.data==='password updated'){
                    toast.success(" passwords updated")
                    navigate('/login')

                }
                if (resp.data==='already existing password'){
                    toast.error('you have entered the same old password');
                }
                
            
            }
        ).catch((error)=>{console.log(error)})
        }
        else{
            toast.warn("password not matched");
        }

    }


    return(
        <div className="main1">
            <form className="form" onSubmit={Changepasswordfunction}>
                <p className="title">User Login </p>
                <p className="message">Login now and get full access to our app. </p>
                <label>
                    <input value={password} onChange={e => passwordchange(e.target.value)} className="input" type="password" placeholder="" required />
                    <span>Password</span>
                </label>
                <label>
                    <input value={newpassword} onChange={e => newpasswordchange(e.target.value)} className="input" type="password" placeholder="" required />
                    <span>Newpassword</span>
                </label>
                <button className="submit" type="submit">
                    {isSubmitting ? (
                        <div className="center-loader">
                            <LoadingSpinner />
                        </div>
                    ) : 'Submit'}
                </button>
            </form>
        </div>
        
    );
}
export default Changepassword;
