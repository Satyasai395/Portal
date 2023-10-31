import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

import validator from 'validator'
function Login() {
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [regtype, regtypechange] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const proceedlogin = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        console.log("ok")
        let loginobj;
        if (validator.isEmail(email)) {
            console.log('========================= valid mail===========');
            loginobj = { password, email, regtype };
        }
        else {
            console.log('*******************not valid mail*************');
            toast.error("check email once");
        }
        console.log(loginobj);
        axios.post('http://127.0.0.1:8000/api1/logindata/', [loginobj]).then(
            (resp) => {
                console.log(resp);
                setIsSubmitting(false);

                if (resp.data === 'no mail') {
                    toast.warn("No such user found");
                }
                else if (resp.data !== 400) {
                    //alert("Registration Successful");
                    toast.success("Login Successful");
                    sessionStorage.setItem('email', email);
                    navigate('/');
                }
                else {
                    toast.error("please enter valid credentials")
                }
            }
        ).catch((error) => { console.log(error) })

    }
    return (

        <div className="main1">
            <form className="form" onSubmit={proceedlogin}>
                <p className="title">User Login </p>
                <p className="message">Login now and get full access to our app. </p>
                <label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>
                <label>
                    <input type='password' value={password} onChange={e => passwordchange(e.target.value)} className="input" placeholder="" required />
                    <span>Password</span>
                </label>
                <label>
                    <select value={regtype} onChange={e => regtypechange(e.target.value)} className="input" required>
                        <option value="" disabled selected>Select User Type</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        {/* <option value="superuser">Superuser</option> */}
                    </select>
                </label>
                <button className="submit">
                    {isSubmitting ? (
                        <div className="center-loader">
                            <LoadingSpinner />
                        </div>
                    ) : 'Submit'}
                </button>
                <p className="signin">Don't you have an acount ? <a href="/register">Signup</a> </p>
                <p className="signin"><a href="/forget">Forget password?</a></p>
            </form>
        </div>
    );
}
export default Login;