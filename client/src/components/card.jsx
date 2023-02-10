import { useState, useEffect } from "react";
import imgUser from '../assets/imgUser.jpg'
import axios from 'axios';

const Card = (props) => {

const users = props.data;

const deleteAccount = async (email) => {
      try {
        const response = await axios({
          method: 'delete',
          url: 'http://localhost:8080/app/user',
          data: {
            email,
          },
          header: {
            'Content-Type':'application/json'
          }
        });
      }
      catch (err) {
        console.log('Some error occured during delete: ', err);
      }
    };

const editAccount = () => {
    console.log("edit")   
   }

   const age = (birthdate) => {
    let date =  new Date().getFullYear();
    let age = parseInt(parseInt(date)-parseInt(birthdate));
    return age
   }

return (
    <div className="card">
        {users.map((user, index) => (
            <div className="userCard">
                <img src={imgUser} alt="image"/>
                <div className="dataCard">               
                    <p>{user.category}</p>
                    <p>{user.firstname} {user.lastname}  ({age(user.birthdate)} ans)</p>
                    <p>{user.city}, {user.country}</p>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                    <div className="buttons">
                      <button className="buttonCollaborators" onClick={(e) => editAccount()}>Editer</button>
                      <button className="buttonCollaborators" onClick={(e) => deleteAccount(user.email)}>Supprimer</button> 
                    </div>
                </div>
            </div>
        ))}
    </div>
)
}

export default Card;