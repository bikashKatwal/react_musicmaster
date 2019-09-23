import React, {Component} from 'react';
import axios from 'axios';
import Artists from "./Artists";

const baseAPIUrl = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

    state = {
        artistQuery: '',
        artist: null,
        tracks:[]
    };

    updateArtistQuery = (event) => {
        this.setState({artistQuery: event.target.value});
    };

    searchArtist = async () => {
        try {
            const response = await axios.get(`${baseAPIUrl}/artist/${this.state.artistQuery}`);
            if (response.data.artists.total > 0) {
                const artist = response.data.artists.items[0];
                this.setState({artist});
                const tracksData = await axios.get(`${baseAPIUrl}/artist/${artist.id}/top-tracks`);
                this.setState({tracks:tracksData.data.tracks});

            }

        } catch (error) {
            alert(error.message);
        }
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    };

    render() {
        console.log('this.state', this.state.artist);
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
                    <Artists artist={this.state.artist}/>
                </div>
            </div>
        );
    }


}

export default App;