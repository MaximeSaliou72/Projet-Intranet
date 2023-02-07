import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/app/auth/signin', {
                email: email,
                password: password
            });
            console.log(e)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

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