import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import NavBar from './NavBar'
import Image from 'react-bootstrap/Image'
import './Cities.css'

export default class Cities extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            citiesArray: [],
            filteredCitiesArray: []
        };
    }

    fetchCities = () => {

        fetch('http://172.16.127.35:5000/cities/all')
            .then(response => response.json())
            .then(citiesArray => this.setState({ citiesArray, isLoading: true, filteredCitiesArray: citiesArray }))
            .catch(error => console.log(error))

    }

    filterCities = (filter) => {
        var filteredCitiesArray = [];
        var value = filter.target.value.toLowerCase()

        this.state.citiesArray.map(element => {
            if (element.city.toString().toLowerCase().startsWith(value))
                filteredCitiesArray.push(element)
        })

        this.setState({ filteredCitiesArray })
    }

    componentDidMount() {
        this.fetchCities()
    }

    render() {

        if (this.state.isLoading === false) {
            return (
                <Container>

                    <NavBar>

                    </NavBar>

                    <h6 className="d-flex justify-content-center mt-3">Waiting for cities list to load</h6>
                </Container>
            )
        }

        else return (

            <Container>

                <NavBar>
                </NavBar>

                <h2 className="d-flex justify-content-center mt-3 mb-3">Cities</h2>

                <Form className="mb-4">
                    <Form.Control type="city" placeholder="Filter your favourite city" onChange={this.filterCities} />
                </Form>

                <Table>

                    <tbody>

                        {this.state.filteredCitiesArray.map((city) =>
                            <tr key={city._id}>
                                <td>
                                    <Image
                                        src={city.img}
                                        fluid />
                                    <h5 className="d-flex justify-content-center mt-3" id="text">{city.city}</h5>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>

            </Container>
        )
    }
}
