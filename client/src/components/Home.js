import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Pictures from './Pictures'
import Container from 'react-bootstrap/Container'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <NavBar></NavBar>
                <Header></Header>
                <Pictures></Pictures>
            </Container>
        )
    }
}
