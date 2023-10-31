import './OTP.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./LoadingSpinner";


function OTP() {
    const [in1, in1change] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const navigate = useNavigate();
    let from = sessionStorage.getItem('from');
    const otpverify = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let otpcode = in1;
        
        console.log(otpcode);
        if (from==='forgetpassword'){
            let from1='forget';
            axios.post('http://127.0.0.1:8000/api1/forgetdata/', [{from1,otpcode}]).then(
            (resp) => {
                console.log(resp);
                setIsSubmitting(false);
                if (resp.data === 'otp verified') {
                    //alert("Verified Successfully");
                    
                    navigate('/changepassword');
                }
                if (resp.data === 'not verifed') {
                    //alert("Invalid OTP")
                    setIsSubmitting(false);
                    toast.error('invalid otp')
                    navigate('/otp');
                }
            }
        
        ).catch((error) => { console.log(error) })

        }
        else{

        
        axios.post('http://127.0.0.1:8000/api1/otpdata/', [otpcode]).then(
            (resp) => {
                console.log(resp);
                if (resp.data === 'valid') {
                    //alert("Verified Successfully");
                    toast.success("Registration Successful")
                    navigate('/login');
                }
                if (resp.data === 'invalid') {
                    //alert("Invalid OTP")
                    toast.error('invalid otp')
                    navigate('/otp');
                }
            }
        
        ).catch((error) => { console.log(error) })
        }
    }
    return (
        <div className="otp">
            <form className="form1" onSubmit={otpverify}>
                <div className="title1">OTP</div>
                <div className="title1">Verification Code</div>
                <p className="message1">We have sent a verification code to your email</p>
                <div className="inputs1">
                    <input value={in1} onChange={e => in1change(e.target.value)} id="input1" type="text" maxLength="4" />
                </div>
{/*                 <button className="action1">verify me</button>
 */}                <button className="action1" type="submit">
                    {isSubmitting ? (
                        <div className="center-loader">
                            <LoadingSpinner />
                        </div>
                    ) : !isSubmitting}verify me
                </button>
            </form>
        </div>
    );
} export default OTP;