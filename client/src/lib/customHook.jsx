import { useState, useEffect } from 'react';
import { getAuthenticatedUser } from './common';
import { useNavigate } from 'react-router-dom';

// Vérifie si on est déjà authentifier
export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAutenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const data = await getAuthenticatedUser();
      console.log(data)
      if (data == null) {
        navigate('/');
        return;
      }
      setUser(user);
      setAutenticated(authenticated);
    }
    getUserDetails();
  }, []);

  return { user };
}