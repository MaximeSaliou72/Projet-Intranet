import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../lib/customHook';
import { storeTokenInLocalStorage } from '../lib/common';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, authenticated } = useUser();

    // if (user || authenticated) {
    //   navigate('./collaborators')
    // }

    const Auth = async (e) => {
      e.preventDefault();
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/app/auth/signin',
            data: {
              email,
              password
            },
            header: {
              'Content-Type':'application/json'
            }
          });
          if (!response?.data?.accessToken) {
            console.log('Something went wrong during signing in: ', response);
            return;
          }
          storeTokenInLocalStorage(response.data.accessToken);
          navigate('/collaborators')
        }
        catch (err) {
          console.log('Some error occured during signing in: ', err);
        }
      };

    return (
        <main className="loginPage">
            <h1>Connexion</h1>
            <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>
            <form onSubmit={Auth} className="loginForm">
                <div>
                    <label>Email </label>
                    <input type="email" className="input" name='email' placeholder="owen.lopez@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
     
                <div>
                    <label>Mot de passe </label>
                    <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="button">Connexion</button>
            </form>
        </main>
    )
}

export default Login;