import React from 'react';

const PostsComponents = ({item}) => {
    return (
        <div>
            {item.id}
            {item.title}
            {item.body}

        </div>
    );
};

export default PostsComponents;