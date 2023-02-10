import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../components/card';
import { useUser } from '../lib/customHook';
import { getTokenFromLocalStorage } from '../lib/common';

const Collaborators = () => {
    const [users, setUsers] = useState([]);
    const token = getTokenFromLocalStorage()
    useUser()

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios({
              method: 'get',
              url: 'http://localhost:8080/app/all',
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
            <h1 className='title'>Liste des collaborateurs</h1>
            <Card data={users}/>
        </div>
    )
}

export default Collaborators;