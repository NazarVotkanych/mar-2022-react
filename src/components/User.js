import React from 'react';


const User = ({item, getUserId}) => {
    return (
        <div>
            <h2>
                {item.id} - {item.name}
            </h2>
            <button onClick={(onClick) => getUserId(item)}> Get Post </button>
        </div>
    );
};

export default User;