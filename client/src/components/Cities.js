import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import './Cities.css'
import { getAllCities } from '../store/actions/citiesActions'
import { connect } from "react-redux";

class Cities extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            citiesArray: [],
            filteredCitiesArray: []
        };
    }

    filterCities = (filter) => {
        var filteredCitiesArray = [];
        var value = filter.target.value.toLowerCase()

        filteredCitiesArray = this.state.citiesArray.filter(element => element.city.toString().toLowerCase().startsWith(value))

        this.setState({ filteredCitiesArray })
    }

    async UNSAFE_componentWillMount() {
        await this.props.citiesArray();
        this.setState({
            citiesArray: this.props.cities.citiesReducer.citiesArray,
            filteredCitiesArray: this.props.cities.citiesReducer.citiesArray,
            isLoading: true
        })
    }

    render() {

        if (this.state.isLoading === false) {
            return (
                <Container>
                    <h6 className="d-flex justify-content-center mt-3">
                        <i>Waiting for cities to load...</i></h6>
                </Container>
            )
        }

        else return (

            <Container>

                <h2 className="d-flex justify-content-center mb-2">Cities</h2>

                <Form className="mb-3">
                    <Form.Control type="city" placeholder="Find your favourite city!" onChange={this.filterCities} />
                </Form>

                <Table>

                    <tbody>

                        {this.state.filteredCitiesArray.map((city) =>
                            <tr key={city._id}>
                                <td id="imgcontainer">
                                    <Link to={`/itineraries/${city.city}`}>
                                        <Image
                                            src={city.img}
                                            fluid rounded />
                                    </Link>
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

const mapStateToProps = (state) => {
    return {
        cities: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        citiesArray: () => dispatch(getAllCities())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cities);