import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Pictures extends Component {
    render() {
        return (
            <div>

                <h6><i>Popular MYtineraries</i></h6>

                <Carousel>
                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="https://www.smartertravel.com/uploads/2017/06/paris_25_ways_to_save_hero-1200x600.jpg"
                                     />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="https://cdn.getyourguide.com/img/location_img-59-1969619245-148.jpg"
                                    fluid />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://cdn.vox-cdn.com/thumbor/Q7_74k0zUmVCID7lnfaxKMuSaVU=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65027193/shutterstock_788608396.0.jpg"
                                    fluid />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://cdn.vox-cdn.com/thumbor/4l2Bo7gZ10AVwlg-7VXS6kibyqk=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/63374841/Eixample.0.jpg"
                                    fluid />

                            </Col>

                        </Row>

                    </Carousel.Item>

                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="http://www.passenger6a.es/wp-content/uploads/2017/10/d-Tokio-1200x600.jpg"
                                     />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="https://assets.metrolatam.com/ec/2015/11/05/screen-shot-2015-11-05-at-4-19-11-pm-1200x600.jpg"
                                    fluid />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://elviajerofeliz.com/wp-content/uploads/2018/05/Que%CC%81-ver-en-Kioto-1280x640.jpg"
                                    fluid />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://www.todaaustralia.com/wp-content/uploads/2018/07/sidney-sydney-australia-1170x658.jpg"
                                    fluid />

                            </Col>

                        </Row>

                    </Carousel.Item>

                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Boca_Grande%2C_Cartagena.jpg/1200px-Boca_Grande%2C_Cartagena.jpg"
                                     />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mb-3"
                                    src="https://www.deginvest.de/Bilder-und-Grafiken/Projekte_Branchen_Regionen/Lima_Peru_Andenstaaten_Responsive_1280x520.jpg"
                                    fluid />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://images.clarin.com/2013/12/20/H1GxUFD2mg_1256x620.jpg"
                                    fluid />
                            </Col>
                            <Col>
                                <Image
                                    className="d-block w-100 h-100 mt-4"
                                    src="https://images.clarin.com/2018/11/22/Az0o4AN5D_1256x620__1.jpg"
                                    fluid />

                            </Col>

                        </Row>

                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
