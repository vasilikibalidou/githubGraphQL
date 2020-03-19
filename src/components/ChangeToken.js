import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ChangeToken extends Component {
    handleClick = event => {
        event.preventDefault();
        this.props.updateFields("");
    };

    render() {
        return (
            <Link to="/" onClick={this.handleClick}>Change Token</Link>
        );
    }
}
