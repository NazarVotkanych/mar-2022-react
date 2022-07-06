import React from 'react';
import {useForm} from "react-hook-form";

import {createUser} from "../../services/user.services/user.services";


const Users = () => {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues:{
                name: 'name',
                username: 'username',
                email: 'gmail.com'
            }
        }
    );
    const submit = (obj) => {
        createUser(obj).then(({data}) => console.log(data))
    }
     return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type='text' {...register('username', {required: true})}/>
                {
                    errors.username && <span>Field is required</span>
                }
                <input type='text' {...register('email', {required: true})}/>
                {
                    errors.email && <span>Field is required</span>
                }
                <input type='submit'></input>
            </form>
        </div>
    );
};

export default Users;