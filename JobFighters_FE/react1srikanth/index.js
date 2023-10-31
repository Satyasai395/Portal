import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Axiosapi from './Axiosapi';
//import Fifth from './Fifth';
import reportWebVitals from './reportWebVitals';
// import LoadingSpinner from './LoadingSpinner';
//import Class10 from './Class10';

//import Class9 from './Class9';
//import { Axios } from 'axios';
//import Class1 from './Class1';
//import Class2 from './Class2';
//import Class3 from './Class3';
//import Class4 from './Class4';
//import Class5 from './Class5';
//import Class6 from './Class6';
//import Class7 from './Class7';
//import Class8 from './Class8';
//import Class8_1 from './Class8_1';
// import Class9 from './Class9';
import Spinner from './Spinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<div>
      <div><Axiosapi /></div>
    <div><Fifth /></div>
    </div>*/}
    
    {/*}<Class1 />*/}
    {/*< Class3/> */}
    {/*<Class2 />*/}
    {/*<Class4 />*/}
    {/*<Class5 />*/}
    {/*<Class6 />*/}
    {/* <Class7 /> */}
    {/*<Class8 />*/}
    {/* <Class8_1 /> */}
    {/* <Class9 /> */}
    {/* <Axiosapi /> */}
    {/* <Class10 /> */}
   <Spinner />
   {/* <LoadingSpinner /> */}
  </React.StrictMode>
);

//----------------------------------------------
/* to refresh every 1 sec
setInterval(() =>{ 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
  <Class1 />
  </React.StrictMode>);
},1000);
*/
//--------------------------------------------------------------
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
