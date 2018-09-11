import React, {Component} from 'react';

export default class addMovie extends Component {
    constructor() {
        super();
        this.state = {
            watchedMovies: []
        };

        this.handleSumit = this.handleSumit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSumit(event) {
        event.preventDefault();
        this.props.setMovieData(this.state.name);
        this.setState({
            name: ''
        })
    }

    handleUpdate(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="addMovie">
                <form onSubmit={this.handleSumit}>
                    <input type="text" placeholder="Movie" value={this.state.name} onChange={this.handleUpdate}/> <input type="submit" value="+ ADD" />
                </form>
            </div>
        )
    }
}