import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import initializeAuthenticatin from '../Firebase/Firebase.init';

initializeAuthenticatin();
const auth = getAuth();

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    // user login form 
    const processLogin = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                history.push(redirect_url);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // input sections 

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
                <form className="row g-3" onSubmit={processLogin}>
                    <div className="col-12">
                        <input onChange={handelEmail} type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input onChange={handelPassword} type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">log in</button>
                    </div>
                </form>
                <div className="col-12 p-4 text-center">
                    <button onClick={handelGoogleLogIn} className="btn btn-warning"><i className="fab fa-google fs-4 pe-2 pt-1 text-white"></i> Google Sign In</button>
                </div>
                <p className="text-danger control-input p-3">New user? please <Link className="login-ancor" to="/register">Registration</Link></p>
                <br /><br /><br /><br />
            </div>
        </div >
    );
};

export default Login;