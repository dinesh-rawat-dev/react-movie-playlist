import React, {Component} from 'react';
import TableRow from './tableRow.jsx';

export default class UnwatchedMovies extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const total = this.props.movies.watchedMovies.length + this.props.movies.unWatchedMovies.length;
        return (
            <div className="watchedMovies">
                <h2> Unwatched Movies <i className="totals">{total ?
                    [<span>
                        {this.props.movies.unWatchedMovies.length} out of {total}
                    </span>]
                    : '' }</i></h2>

                <br/>

                <table>
                    <tbody>
                    {!this.props.movies.unWatchedMovies.length? "No unwatched movies found!":
                        this.props.movies.unWatchedMovies.map((movie, i) =><TableRow key={i} movie={movie} makeWatchedOrUnwatched={this.props.makeWatched.bind(this, i)}
                                                                              text="Make Watched"/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}