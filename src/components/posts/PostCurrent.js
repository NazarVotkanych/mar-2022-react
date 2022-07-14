import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {urlService} from "../../services/posts.service";
import PostsComponents from "./PostsComponents";

const PostCurrent = () => {

    const {postId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        urlService.getByID(postId).then(value => setPosts([...value]))
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostsComponents item={value} key={value.id}/>)
            }
        </div>
    );
};

export default PostCurrent;