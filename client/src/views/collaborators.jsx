import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../components/card';

const Collaborators = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:8080/app/all');
        setUsers(response.data);

    }

    return (
        
        <div>
            <h1>Liste des collaborateurs</h1>
            <Card data={users}/>
        </div>
    )
}

export default Collaborators;