import React, {useEffect, useState} from 'react';

import {urlService} from "../../services/todos.service";
import TodoComponent from "./TodoComponent";

const TodosComponents = () => {

    const [todos, setTodos] = useState([])

    useEffect(()=>{
        urlService.getTodos().then(value => setTodos([...value]))
    },[])


    return (
        <div>
            {
                todos.map(value => <TodoComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export default TodosComponents;