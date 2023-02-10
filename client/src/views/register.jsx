import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Form from '../components/forms';
import { useUser } from '../lib/customHook';

const Register = () => {
    useUser()
    return (
        <div>
           <Form title="Crée un utilisateur" register='true' /> 
        </div>
    )

}

export default Register;