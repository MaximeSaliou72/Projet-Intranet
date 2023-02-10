import { useEffect } from "react";
import axios from 'axios';

const Logout = () => {
    useEffect(() => {
        logout();
    }, []);

    const logout = async() => {
        try {
            const response = await axios({
              method: 'get',
              url: 'http://localhost:8080/app/logout',
            });
            console.log(response)
          }
          catch (err) {
            console.log('Some error occured during logout: ', err);
          }
       }
    
}

export default Logout