import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {urlService} from "../../services/posts.service";
import PostsComponents from "./PostsComponents";

const PostCurrent = () => {

    const {postId} = useParams();

    const [post, setPosts] = useState(null);

    useEffect(()=>{
        urlService.getByID(postId).then(value => setPosts(value))
    },[postId])

    return (
        <div>
            {
                post
                ? <PostsComponents item={post}/>
                : 'Loading....'
            }
        </div>
    );
};

export default PostCurrent;