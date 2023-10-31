// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register1';
import OTP from './OTP';
import Forgetpassword from './Forgrtpassword';
import Changepassword from './Changepassword';

function App() {
  return (
    <div className="App">
      < ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/otp' element={<OTP/>}></Route>
        <Route path='/forget' element={<Forgetpassword/>}></Route>
        <Route path='/changepassword' element={<Changepassword/>}></Route>

      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
