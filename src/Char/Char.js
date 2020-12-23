import React from 'react';

const Char = ({ char, click }) => {
    const divStyle = {
        'display': 'inline-block',
        'padding': '16px',
        'text-align': 'center',
        'margin': '16px',
        'border': '1px solid black'
    };

    return (
        <div style={divStyle} onClick={click}>
            {char}
        </div>
    )
};

export default Char;