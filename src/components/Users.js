import React, {useEffect, useState} from 'react';
import User from "./User";
import {userService} from "../services/users.api.service";

const Users = ({getUserId}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(value => <User getUserId={getUserId}
            key={value.id}
            item={value}
            />)}

        </div>
    );
};
export default Users;