import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Image
                            height={300}
                            width={500}
                            src={require("../images/MYtineraryLogo.png")}
                            fluid />
                    </Row>

                    <Row className="justify-content-md-center d-flex mx-auto d-block">
                        <h6 ><i>Find your perfect trip, designed by insiders who know and love their cities</i></h6>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Button className="d-flex mx-auto d-block" variant="outline-light">
                            <Image
                                height={50}
                                width={100}
                                src={require("../images/circled-right-2.png")}
                                fluid/>
                        </Button>
                    </Row>

                </Container>
            </div>
        )
    }
}
