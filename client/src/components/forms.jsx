import { useState, useEffect } from "react";

const Form = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [gend, setGend]= useState('');
    const [metier, setMetier]= useState('');

    const genders = [
        {
            label: 'Veulliez choisir votre genre',
            value: null,
        },
        {
            label: 'Homme',
            value: 'homme',
        },
        {
            label: 'Femme',
            value: 'femme',
        }
    ]
    const catégories = [
        {
            label: 'Veulliez choisir votre métier',
            value: null,
        },
        {
            label: 'Marketing',
            value: 'marketing',
        },
        {
            label: 'Client',
            value: 'client',
        },
        {
            label: 'Commerciale',
            value: 'commerciale',
        }
    ]
    
    const Submit = async (e) => {
        e.preventDefault();
        try {
            if(props.register == 'true') {
                await axios.post('http://localhost:8080/app/auth/signup', {
                gender: gend,
                category: metier,
                email,
                password,
                firstName,
                lastName,
                phone,
                photo: null,
                birthdate: Date.now(),
                city,
                country,
                createdAt:Date.now(),
                updateAt:Date.now()
            });
            } else {
                
            }

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

return (
    <div className="registerPage">
        <h1>{props.title}</h1>
        <form onSubmit={Submit} className="registerForm">
            <div>
                <label>Civilité </label>
                <select onChange={(e) => setGend(e.target.value)}>
                    {genders.map((gender) => (
                    <option value={gender.value}>{gender.label} </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Catégorie </label>
                <select onChange={(e) => setMetier(e.target.value)}>
                    {catégories.map((catégorie) => (
                    <option value={catégorie.value}>{catégorie.label}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Nom </label>
                <input type="text" className="input" name='lastName' placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Prénom </label>
                <input type="text" className="input" name='firstName' placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Email </label>
                <input type="email" className="input" name='email' placeholder="owen.lopez@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Mot de passe </label>
                <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Téléphone </label>
                <input type="text" className="input" name='phone' placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Date de Naissance </label>
                <input type="text" className="input" name='birthdate' placeholder="" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>
            <div>
                <label>Ville </label>
                <input type="text" className="input" name='city' placeholder="" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>Pays </label>
                <input type="text" className="input" name='country' placeholder="" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <button className="button">Ajouter</button>
        </form>
    </div>
)

}
export default Form;