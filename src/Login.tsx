import React, { useState, useEffect } from 'react';

import App from './App';
import AuthCard from './components/Auth/AuthCard';


const Login: React.FC = () => {

    var [login , setLogin] = useState(false);

    const checkAuth = () => {
        const authState = localStorage.getItem('authed');
        console.log('AuthState: '+ authState);

        if( authState == 'true'){
            setLogin(true);
            console.log('Login: '+ login);
        }
    }

 	useEffect(() => {
        checkAuth();
 	})

    return (
        <div>
            {login ? <App /> : (<div> <AuthCard />{console.log(login)} </div>) }
        </div>
      );
};

export default Login;
