import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../lib/common';
const Logout = () => {
  const navigate = useNavigate();
    useEffect(() => {
        logout();
    }, []);

    const logout = async() => {
        try {
            const response = await axios({
              method: 'get',
              url: 'http://localhost:8080/app/logout',
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            localStorage.clear();
            navigate('/9')
          }
          
          catch (err) {
            console.log('Some error occured during logout: ', err);
          }
       }
    
}

export default Logout