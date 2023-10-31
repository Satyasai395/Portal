import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function Forgetpassword() {
    const [email, emailchange] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const proceedlogin = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        console.log("ok")
        let loginobj;
        if (validator.isEmail(email)) {
            console.log('========================= valid mail===========');
            loginobj = { email };
        }
        else {
            console.log('*******************not valid mail*************');
            toast.error("check email once");
        }
        console.log(loginobj);
       
        axios.post('http://127.0.0.1:8000/api1/forgetdata/', [loginobj]).then(
            (resp) => {
                console.log("-------------",resp);
                console.log("data sent is",resp.data)

                if (resp.data==='notfound'){
                    toast.warn("No account found with this Email");
                    /* navigate('/otp') */
                }
                else if (resp.data === 'otp') {
                    toast.success("otp sent Successfully");
                    sessionStorage.setItem('from', 'forgetpassword');
                    navigate('/otp');
                } 
            })
    }


    return (

        <div className="main1">
            <form className="form" onSubmit={proceedlogin}>
                <p className="title">Update password </p>
                <p className="message">enter your email that registerd with us. </p>
                <p className="message">An OTP will send to this email. </p>
                <label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="input" type="email" placeholder="" required />
                    <span>Email</span>
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
} export default Forgetpassword;