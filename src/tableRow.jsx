import React, {Component} from 'react';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr><td>{this.props.movie}</td> <td align="right"><button onClick={this.props.makeWatchedOrUnwatched}>{this.props.text}</button></td></tr>
        )
    }
}
