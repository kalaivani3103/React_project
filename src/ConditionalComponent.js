import React, { Component } from 'react'

export default class ConditionalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn)
            return <h2>Hello, Kalaivani</h2>
        else
            return <h2>Hello, User</h2>

    }
}