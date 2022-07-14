import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({item}) => {
    return (
        <div>
            <h3>
                {item.id}) {item.name}
                {item.email} - {item.body}
                <button><Link to={item.postId.toString()}>Post for comment</Link></button>
            </h3>
        </div>
    );
};

export default CommentComponent;