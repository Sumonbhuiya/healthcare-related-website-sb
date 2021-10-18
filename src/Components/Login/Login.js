import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [error, setError] = useState('');
    const auth = getAuth();

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
    const processLogin = (email, password) => {
        const user = auth.currentUser;
        if (user !== null) {

            signInWithEmailAndPassword(auth, email, password)
                .then(userResult => {
                    const randomUser = userResult.user;
                    console.log(randomUser);
                    // set error empty 
                    setError('');
                })
                // error message 
                .catch(error => {
                    setError(error.message);
                })
        }
    }



    return (
        <div className="back-image">
            <div className="p-5 control-form">
                <br /><br />
                <form className="row g-3" onSubmit={processLogin}>
                    <div className="col-12">
                        <input type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">log in</button>
                    </div>
                </form>
                <div className="col-12 p-4 text-center">
                    <button onClick={handelGoogleLogIn} className="btn btn-warning">Google Sign In</button>
                </div>
                <p className="text-danger control-input p-3">New user? please <Link className="login-ancor" to="/register">Registration</Link></p>
                <br /><br /><br /><br />
            </div>
        </div >
    );
};

export default Login;