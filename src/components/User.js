import React from 'react';

const User = ({item}) => {
    return (
        <div>
            <h2>
                {item.id} - {item.name}
            </h2>
        </div>
    );
};

export default User;