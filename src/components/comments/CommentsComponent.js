import React, {useEffect, useState} from 'react';

import {urlService} from "../../services/comments.service";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState([])

    useEffect(()=> {
        urlService.getAllComments().then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export default CommentsComponent;