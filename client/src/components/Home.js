import React, { Component } from 'react'
import Pictures from './Pictures'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Pictures></Pictures>
            </div>
        )
    }
}
