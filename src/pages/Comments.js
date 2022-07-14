import React from 'react';

import {Outlet} from "react-router-dom";
import CommentsComponent from "../components/comments/CommentsComponent";

const Comments = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
};

export default Comments;