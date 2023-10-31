import React, { useState } from "react";
import axios from "axios";
import validator from 'validator'
import './register1.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function Register() {
    const [firstname, firstnamechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [confirmpassword, confirmpasswordchange] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    //const [phone, phonechange] = useState("");
    const [regtype, regtypechange] = useState("");
    //const [address, addresschange] = useState("");
    //const [gender, genderchange] = useState("male");
    const navigate = useNavigate();





    const handlesubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        /* if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            console.log("------------------------------------verified email")
        }
        else{
            console.log("////////////////////////////not verified")
        } 
        if (validator.isEmail(email)) { 
            console.log('========================= valid mail===========');
            loginobj = { password, email, regtype };
        }
        else{
            console.log('*******************not valid mail*************');
            toast.error("check email once");
        }
        // if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('Is Strong Password') 
        } else { 
            setErrorMessage('Is Not Strong Password') 
        } 
    } 
        
        */

        let validemail = false;
        let validpassword = false;

        if (validator.isEmail(email)) {
            //toast.error('not a valid Email');
            validemail = true
            if (password === confirmpassword) {

                const validatePassword = (password) => {
                    if (!validator.isStrongPassword(password, {
                        minLength: 8, minLowercase: 1,
                        minUppercase: 1, minNumbers: 1, minSymbols: 1
                    })) {
                        toast.error('not a strong password');
                        
                        validpassword = true;
                    }
                }



                let regobj = { firstname, lastname, email, password, regtype };
                console.log(regobj);
                validatePassword(password)
                axios.post('http://127.0.0.1:8000/api1/regdata/', [regobj]).then(
                    (resp) => {
                        console.log(resp)
                        if (resp.data !== 400) {
                            navigate('/otp')
                            //alert("Registration Successful");
                            /* toast.success("Registration Successful")
                                navigate('/login'); */
                        }
                        if (resp.data === 400) {
                            //alert("email already exist")
                            toast.error('Email already exists');
                        }

                    }
                ).catch((error) => { console.log(error) }).finally(() => {
                    setIsSubmitting(false); // Set isSubmitting to false after submission completes
                });

            }
        }

        else {
            if (!validemail) {
                toast.error('check email once');

            }
            else {
                //alert("enter same password as above")
                toast.warn("enter same password as above")
                if (validpassword) {
                    toast.error('password not strong enough');
                }
            }

        }

    }


    return (
        <div className="main1">
            <form className="form" onSubmit={handlesubmit}>
                <p className="title">User Registration </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input value={firstname} onChange={e => firstnamechange(e.target.value)} className="input" type="text" placeholder="" required />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input value={lastname} onChange={e => lastnamechange(e.target.value)} className="input" type="text" placeholder="" required />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>

                <label>
                    <input type='password' value={password} onChange={e => passwordchange(e.target.value)} className="input" placeholder="" required />
                    <span>Password</span>
                </label>
                <label>
                    <input type='password' value={confirmpassword} onChange={e => confirmpasswordchange(e.target.value)} className="input" placeholder="" required />
                    <span>Confirm password</span>
                </label>
                <label>
                    <select value={regtype} onChange={(e) => regtypechange(e.target.value)} className="input" required>
                        <option value="" disabled selected>Select User Type</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                {/* <button className="submit">Submit</button> */}
                <button className="submit" type="submit">
                    {isSubmitting ? (
                        <div className="center-loader">
                            <LoadingSpinner />
                        </div>
                    ) : 'Submit'}
                </button>
                <p className="signin">Already have an acount ? <a href="/login">Login</a> </p>
            </form>
        </div>

    );
}
export default Register;