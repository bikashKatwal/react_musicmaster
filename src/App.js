import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

    state = {
        artistQuery: ''
    };

    updateArtistQuery = (event) => {
        this.setState({artistQuery: event.target.value});
    };

    searchArtist = async () => {
        const request = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artistQuery}`);
        console.log("Request", request.data);
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    };

    render() {
        return (
            <div className="container">
                <h2>Music Master</h2>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <input type="text"
                                   onChange={this.updateArtistQuery}
                                   onKeyPress={this.handleKeyPress}
                                   className="form-control" placeholder="Search for an Artist"
                                   aria-label="Search for an Artist" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button
                                    onClick={this.searchArtist}

                                    className="btn btn-outline-secondary" type="button">Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div>
                    <p>{this.state.artistQuery}</p>
                </div>
            </div>
        );
    }


}

export default App;