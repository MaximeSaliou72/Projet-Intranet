import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../components/card';
import { useUser } from '../lib/customHook';
import { getTokenFromLocalStorage } from '../lib/common';
import { useNavigate } from 'react-router-dom';

const Random = () => {
    const [users, setUsers] = useState([]);
    const token = getTokenFromLocalStorage()
    useUser()
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, []);

    const passer = () => {
        navigate('/')
    }
    const getUser = async () => {
        try {
            const response = await axios({
              method: 'get',
              url: 'http://localhost:8080/app/allRandomUser',
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setUsers(response.data);
          }
          catch (err) {
            console.log('Some error occured during recup data: ', err);
          }
    }

    return (
        
        <div>
          <div className='center'>
            <h1>Bienvenue sur l'Intranet</h1>
            <p>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
            <p>Avez-vous dit boujour à : </p>
          </div>
            <Card data={users} alone="true"/>
            <div className='buttons'>
              <button className="buttonCollaborators" onClick={passer}>Passer</button>
              <button className="buttonCollaborators" onClick={getUser}>Dire Bonjour à quelqu'un d'autre</button>
            </div>

        </div>
    )
}

export default Random;