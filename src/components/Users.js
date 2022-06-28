import React, {useEffect, useState} from 'react';
import {getUsers} from "../services";
import User from "./User";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {

        getUsers().then(value => setUsers([...value]));
    })

    return (
        <div>
            {users.map(value => <User
            key={value.id}
            item={value}
            />)}

        </div>
    );
};

export default Users;