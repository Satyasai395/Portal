import React, { useState } from "react";
import axios from "axios";
function Register() {


    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("male");

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        console.log(regobj);
        axios.post('http://127.0.0.1:8000/api1/postdata/', [regobj]).then(
            (resp) => { console.log(resp) }
        ).catch((error) => { console.log(error) })

    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Register page</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>user name<span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>password<span className="errmsg">*</span></label>
                                        <input type='password' value={password} onChange={e => passwordchange(e.target.value)} className="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>full name<span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} type="text" className="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>email<span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} type="email" className="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>phone no<span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>country<span className="errmsg">*</span></label>
                                        <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                            <option value="select">select</option>
                                            <option value="india">india</option>
                                            <option value="india">nepal</option>
                                            <option value="india">srilanka</option>
                                            <option value="india">bangladesh</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender<span className="errmsg">*</span></label><br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value='male' className="app-check" ></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value='female' className="app-check" ></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control" placeholder=""></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register </button>
                            <a className="btn btn-danger" href="#">Back</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

}
export default Register;