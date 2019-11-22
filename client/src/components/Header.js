import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                            <Image
                                height={300}
                                width={500}
                                src={require("../images/MYtineraryLogo.svg")}
                                fluid />
                    </Row>

                    <Row className="justify-content-center">
                        <h6 ><i>Find your perfect trip, designed by insiders who know and love their cities</i></h6>
                    </Row>

                    <Row className="d-flex justify-content-center">
                    <Link to="/Cities">
                        <Image className="mt-3 mb-3"
                            height={50}
                            width={100}
                            src="https://www.wpclipart.com/signs_symbol/arrows/arrows_color/arrow_outline_red_right.png"
                            fluid />
                        </Link>
                    </Row>

                </Container>
            </div>
        )
    }
}
