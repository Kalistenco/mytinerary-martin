import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import NavBar from './NavBar'
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

        this.state.citiesArray.map(element => {
            if (element.city.toString().toLowerCase().startsWith(value))
                filteredCitiesArray.push(element)
        })

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
                    <NavBar>
                    </NavBar>
                    <h6 className="d-flex justify-content-center mt-3">Waiting for cities list to load</h6>
                </Container>
            )
        }

        else return (

            <Container>

                <NavBar></NavBar>

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