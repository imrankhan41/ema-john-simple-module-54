import React from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css"
const Register = () => {
    return (
        <div className="login-form">
           <div>
           <h1>Create Account</h1>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Enter Your Name" />
                <br />
                <input type="password" name="" id="" placeholder="Enter Your Password" />
                <br />
                <input type="password" name="" id="" placeholder="Re-enter Your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link> </p>
            <div>----------------or---------------</div>
            <button className="btn-regular">Google Sign In</button>
           </div>
        </div>
    );
};

export default Register;