import React, {Component} from 'react';

class App extends Component {

    state = {
        artistQuery: ''
    };

    updateArtistQuery = (event) => {
        this.setState({artistQuery: event.target.value});
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
                                   className="form-control" placeholder="Search for an Artist"
                                   aria-label="Search for an Artist" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
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