import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Form from '../components/forms';

const Edit = () => {
    return (
        <div>
           <Form title="Editer un utilisateur" register='false' /> 
        </div>
        
    )

}

export default Edit;