const Login = () => {
    return (
        <main className="loginPage">
            <h1>Connexion</h1>
            <p>Pour vous connecter à l'intranet, emtrez votre identifiant et mot de passe.</p>
            <form className="loginForm">
                <div>
                    <label>Email </label>
                    <input placeholder="ex: owen.lopez@exemple.com"></input>
                </div>
     
                <div>
                    <label>Mot de passe </label>
                    <input text='password' placeholder="Password"></input>
                </div>
                <button className="button">Connexion</button>
            </form>
        </main>
    )
}

export default Login;