import React, {Component} from 'react';
import TableRow from './tableRow.jsx';

export default class WatchedMovies extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const total = this.props.movies.watchedMovies.length + this.props.movies.unWatchedMovies.length;
        return (
            <div className="watchedMovies">
                <h2> Watched Movies <i className="totals">{total ?
                    [<span>
                        {this.props.movies.watchedMovies.length} out of {total}
                    </span>]
                    : '' }</i></h2>

                <br/>
                <table>
                    <tbody>
                    {!this.props.movies.watchedMovies.length ? "No watched movies found!" :
                        this.props.movies.watchedMovies.map((movie, i) => <TableRow key={i}
                                                                                    movie={movie}
                                                                                    makeWatchedOrUnwatched={this.props.makeUnwatched.bind(this, i)}
                                                                                    text="Make Unwatched"/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}