import React from 'react';
import './Person.css'

const Person = props => {

   


    return (
        <div
            className="Person">
            <h5 style={props.style} onClick={props.click}>Hello, My name is {props.name}.</h5>
            <p>And I am {props.age} years old.</p>
            <input type="text" onChange={props.nameChange} value={props.name}></input>
            <p>{props.children}</p>

        </div>
    );
}


export default Person;