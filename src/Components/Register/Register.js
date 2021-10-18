import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    // registration form 
    const handelRegistration = event => {
        event.preventDefault();
        // check password formate 
        if (!/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/) {
            setError('Password must be 8 characters (2 uppercase letter, 1 special charecter, 2 number, 3 lowercase letter).');
            return;
        }
    }


    // registration process 
    createUserWithEmailAndPassword(auth, email, password)
        .then(userResult => {
            const randomUser = userResult.user;
            console.log(randomUser);
            setError('');
            // call set name function 
            setUserName();
            // call verify email function 
            verifyEmail();
        })
        .catch(error => {
            setError(error.message);
        })

    // set user name 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // verify user email 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    // input sections 
    const handelNameChange = event => {
        setName(event.target.value);
    }

    const handelEmail = event => {
        setEmail(event.target.value);
    }

    const handelPassword = event => {
        setPassword(event.target.value);
    }
    return (
        <div className="back-image">
            <div className="p-5 control-form">
                <br /><br />
                <form className="row g-3" onSubmit={handelRegistration}>
                    <div className="col-12">
                        <input onBlur={handelNameChange} type="text" className="form-control control-input" id="inputAddress" placeholder="Name" required />
                    </div>
                    <div className="col-12">
                        <input onBlur={handelEmail} type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input onBlur={handelPassword} type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">Sign in</button>
                    </div>
                </form>
                <p className="text-danger control-input p-3">Already have an account? <Link className="login-ancor" to="/login">Login</Link></p>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default Register;