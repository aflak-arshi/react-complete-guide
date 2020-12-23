import React from 'react';

const UserInput = ({ userName, onUserNameChange }) => {
    return <input type="text" onChange={onUserNameChange} value={userName} />
    
};

export default UserInput;