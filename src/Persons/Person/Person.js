import React from 'react';
import classes from './Person.module.css';

const Person = ({ name, age, children, click }) => {
    return (
        <div onClick={click}>
          <p className={classes.P}>
            I'm {name} and I am {age} years old!
          </p>
          <p>
            {children}
          </p>
        </div>
    );
}

export default Person;