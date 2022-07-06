import React from 'react';

import {useForm} from "react-hook-form";
import {createComment} from "../../services/comment.services/comment.services";


const Comments = () => {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues:{
                name: 'name',
                body: 'body',
            }
        }
    );
    const submit = (obj) => {
        createComment(obj).then(({data}) => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type='text' {...register('body', {required: true})}/>
                {
                    errors.body && <span>Field is required</span>
                }
                <input type='submit'></input>
            </form>

        </div>
    );
};

export default Comments;