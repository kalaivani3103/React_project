import React, { Component } from 'react'

export default class EmployeeState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employer: "HCL",
            name: "Kalai",
            salery: 25000

        }
    }
    changeEmployeeDetails = () => {
        this.setState({
            employer: "HCL Tech",
            name: "Kalaivani"
        })
    }
    render() {
        const { employer, name, salery } = this.state
        return (
            <>
                <h2>Class Component Employee Details:</h2>
                <p>Employer: {employer}</p>
                <p>Name: {name}</p>
                <p>Salery: {salery}</p>
                <button onClick={this.changeEmployeeDetails}>ChangeEmployeeDetails</button>
            </>

        )
    }
}