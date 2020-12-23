import React from 'react';

const Validation = ({ textLength }) => {
    return (
        <div>
            <p>
                {textLength < 5 ? "Text too short" : "Text long enough"}
            </p>
        </div>
    )
};

export default Validation;