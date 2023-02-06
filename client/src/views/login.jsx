const Login = () => {
    return (
        <main className="loginPage">
            <h1>Connexion</h1>
            <p>Pour vous connecter à l'intranet, emtrez votre identifiant et mot de passe.</p>
            <form className="loginForm">
                <label>Email
                    <input placeholder="ex: owen.lopez@exemple.com"></input>
                </label>
                <label> Mot de passe
                    <input placeholder="password"></input>
                </label>
                <button className="button">Connexion</button>
            </form>
        </main>
    )
}

export default Login;