import React, {useState} from 'react';

import Users from "./components/Users";
import {postService} from "./services/post.api.service";
import Posts from "./components/Posts";
import User from "./components/User";


const App = () => {

    const [posts,setPosts] = useState([]);

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts(value))
    }

    return (
        <div>
         <Users getUserId={getUserId}/>

            {posts && <Posts posts={posts}/>}
        </div>
    );
};

export default App;