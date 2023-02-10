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
            console.log(response.data)
          }
          catch (err) {
            console.log('Some error occured during recup data: ', err);
          }
    }

    return (
        
        <div>
            <h1 className='title'>Collaborateurs Aléatoire</h1>
            <Card data={users} alone="true"/>
            <div className='centerButton'>
              <button className="buttonCollaborators" onClick={passer}>Passer</button>
            </div>

        </div>
    )
}

export default Random;