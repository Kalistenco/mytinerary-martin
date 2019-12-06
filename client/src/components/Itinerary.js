import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Itinerary.css'

const Itinerary = ({ itinerary }) => <div>
    <Row className="mt-5" id="it">
        <Col className="ml-4" id="imgcontainer">
            <Image id="profile"
                src={itinerary.userPhoto}
                fluid roundedCircle />
            <h6 className="ml-1">{itinerary.username}</h6>
        </Col>
        <Col>
            <Row className="d-flex justify-content-center mb-3">
                <h4>{itinerary.title}</h4>
            </Row>
            <Row className="mb-3">
                <Col>
                    <h6>Rating: {itinerary.rating}</h6>
                </Col>
                <Col>
                    <h6>{itinerary.duration} hours</h6>
                </Col>
                <Col>
                    <h6>{itinerary.price}</h6>
                </Col>
            </Row>
            <Row>

                {itinerary.hashtags.map(hashtag =>
                    <Col>
                        <h6> {hashtag} </h6>
                    </Col>
                )}
            </Row>
        </Col>
    </Row>
</div>;

export default Itinerary;