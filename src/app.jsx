import React, {Component} from 'react';
import UnwatchedMovies from './unwatchedMovies.jsx';
import WatchedMovies from './watchedMovies.jsx';
import AddMovie from './addMovie.jsx';

export default class App extends Component {
    constructor() {
        super();
        this.setMovieData = this.setMovieData.bind(this);
        this.makeUnwatched = this.makeUnwatched.bind(this);
        this.makeWatched = this.makeWatched.bind(this);
        this.state = {
            watchedMovies: [],
            unWatchedMovies: []
        }
    }

    setMovieData(data) {
        const key = this.state.watchedMovies.length;
        this.state.watchedMovies.push(data);
        this.setState(this.state);
    }

    makeUnwatched(index) {
        const unWatched = this.state.watchedMovies.splice(index, 1);
        this.state.unWatchedMovies = this.state.unWatchedMovies.concat(unWatched);
        this.setState(this.state)
    }

    makeWatched(index) {
        const watched = this.state.unWatchedMovies.splice(index, 1);
        this.state.watchedMovies = this.state.watchedMovies.concat(watched);
        this.setState(this.state)
    }

    render() {
        return (
            <div>
                <AddMovie setMovieData={this.setMovieData}/>
                <div className="movieList">
                    <WatchedMovies movies={this.state} makeUnwatched={this.makeUnwatched}/>
                    <UnwatchedMovies movies={this.state} makeWatched={this.makeWatched}/>
                </div>
            </div>
        )
    }
}
