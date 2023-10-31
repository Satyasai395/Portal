import React from "react";
import './Class4.css'
import  data from './Class4data';
//console.log(data);

function Class4(){
    return(
        <main className="container">
            <ul className="comments-container">
                {/*
                 <li className="comment">
                    <div className="comments-header">
                        <h3 className="email">saasas@gmail.com</h3>
                        <h3 className="name">satyasaii</h3>
                    </div>
                    <p className="message">loerwewdjjjjjhf</p>

                 </li>
                 <li className="comment">
                    <div className="comments-header">
                        <h3 className="email">saasas@gmail.com</h3>
                        <h3 className="name">satyasaii</h3>
                    </div>
                    <p className="message">loerwewdjjjjjhf</p>

                 </li>
                 <li className="comment">
                    <div className="comments-header">
                        <h3 className="email">saasas@gmail.com</h3>
                        <h3 className="name">satyasaii</h3>
                    </div>
                    <p className="message">loerwewdjjjjjhf</p>

                 </li>
                 
                 <li className="comment">
                    <div className="comments-header">
                        <h3 className="email">saasas@gmail.com</h3>
                        <h3 className="name">satyasaii</h3>
                    </div>
                    <p className="message">loerwewdjjjjjhf</p>

                 </li>
                   
                 <li className="comment">
                    <div className="comments-header">
                        <h3 className="email">saasas@gmail.com</h3>
                        <h3 className="name">satyasaii</h3>
                    </div>
                    <p className="message">loerwewdjjjjjhf</p>

                 </li>
                 */}
                 {
                    data.map((eachcomment)=>{
                        const {id,email,name,body}=eachcomment;
                        return (
                        <>
                        {/*<li key={id} className="comment"> 
                        <div className="comments-header">
                            <h3 className="email">{email}</h3>
                            <h3 className="name">{name}</h3>
                        </div>
                        <div className="message">{body}</div>
                        </li>*/}
                        <Listitem key={id} id={id} email={email} name={name} body={body} />
                        
                        </>
                        );
                    })
                 }    
            </ul>
        </main>
  );
};
const Listitem=(props)=>{
    const {id,email,name,body}=props;
    return(
        <li className="comment"> 
                        <div className="comments-header">
                            <h3 className="email">{email}</h3>
                            <h3 className="name">{name}</h3>
                        </div>
                        <div className="message">{body}</div>
                        </li>
    );
}
//note(keypoint: we can also make this Profile  as another js file by export default and we can utilize it by importing that js)
export default Class4;