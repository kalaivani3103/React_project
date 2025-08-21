import React, {Component} from 'react';

export default class ChildClass extends Component {
    render() {
        const { name, age, designation } = this.props.customer
        return (
            <>
               <h2>Child Class Component</h2> 
               <p>Name: {name}</p>
               <p>Age: {age}</p>
               <p>Designation: {designation}</p>
               
            </>
        );
    }
}