import { useState, useEffect } from "react";

const Card = (props) => {
console.log(props.data)

const users = props.data;
console.log(users)

const deleteAccount = () => {
 console.log("delete")   
}

const editAccount = () => {
    console.log("edit")   
   }
   

return (
    <div>
        {users.map((user, index) => (
            <div>
                <p>{user.firstname} {user.lastname}</p>
                <p>{user.email}</p>
                <button onClick={editAccount}>Editer</button>
                <button onClick={deleteAccount}>Supprimer</button>
            </div>
        ))}
    </div>
)
}

export default Card;