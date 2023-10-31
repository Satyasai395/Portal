import { useEffect } from 'react';
import './home.css';
import { Link, useNavigate } from "react-router-dom";
function Home() {
    const usenavigate = useNavigate();
    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if (email === null || email === '') { usenavigate('/login') }

    }, [])
    let email = sessionStorage.getItem('email');
    return (
        <div className='sai'>
            
            <div className="header" >
                <Link to={'/'}>home</Link>
                <p>welcome: {email}</p>
                <Link style={{float:'right'}} to={'/login  '} >logout</Link>
                
            </div>

            <h1 className='text-center'>welcome to home page</h1>
        </div>
    );
}
export default Home;