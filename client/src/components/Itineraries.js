import React, { Component } from 'react'
import './Cities.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { getAllItineraries } from '../store/actions/itinerariesActions'
import { connect } from "react-redux";
import Itinerary from './Itinerary'

class Itineraries extends Component {
    state = {
        city: {},
        itinerariesArray: [],
        cityIsLoading: true,
        itineraryIsLoading: true
    }

    componentDidMount() {
        console.log(this.props.match.params.name)
        const name = this.props.match.params.name;
        const url = "http://172.16.127.35:5000/cities/" + name;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ city: data, cityIsLoading: false }))
            .then(this.filterItineraries())
            .catch(err => console.log(err));
    }

    async UNSAFE_componentWillMount() {
        await this.props.itinerariesArray();
        this.setState({
            itinerariesArray: this.props.itineraries.itinerariesReducer.itinerariesArray,
            itineraryIsLoading: true
        })
    }

    async filterItineraries() {
        await this.props.itinerariesArray();

        var thisItineraries = this.state.itinerariesArray;
        var thisName = this.props.match.params.name;

        thisItineraries = thisItineraries.filter(it => it.city == thisName);

        this.setState({
            itinerariesArray: thisItineraries
        })
    }

    render() {
        if (this.state.cityIsLoading === true && this.state.itineraryIsLoading === true) {
            return (
                <Container>
                    <h6 className="d-flex justify-content-center mt-3">
                        <i>Waiting still we load the cities info...</i></h6>
                </Container>
            )
        }

        return (
            <Container>
                <div id="imgcontainer">
                    <Image
                        src={this.state.city.img}
                        fluid rounded />
                    <h5 className="d-flex justify-content-center mt-3" id="text">{this.state.city.city}</h5>
                </div>

                {this.state.itinerariesArray.map(it =>
                    <Itinerary itinerary={it}>
                    </Itinerary>
                )}

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itineraries: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        itinerariesArray: () => dispatch(getAllItineraries())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Itineraries);