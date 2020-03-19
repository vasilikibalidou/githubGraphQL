import React, { Component } from "react";
import { Comment, Text, Created, Input } from "./StyledComponents";
import { Link } from "react-router-dom";

export default class IssueDetails extends Component {
    state = {
        filter: "",
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                {this.props.state.data?.issues.edges.map(val => {
                    if (val.node.id === this.props.issueId) {
                        {
                            val.node.comments.edges.sort((a, b) => {
                                return new Date(a.node.createdAt) - new Date(b.node.createdAt);
                            })
                        }
                        return (
                            <div key={val.node.id}>
                                <Link to="/">Back</Link>
                                <h1>{val.node.bodyText}</h1>
                                <Input
                                    type="text"
                                    id="filter"
                                    name="filter"
                                    placeholder="filter comments"
                                    value={this.state.filter}
                                    onChange={this.handleChange}
                                />
                                {val.node.comments.edges.map((val, i) => {
                                    if (val.node.bodyText.includes(this.state.filter)) {
                                        let date = val.node.createdAt.split("T")[0];
                                        let time = val.node.createdAt.split("T")[1].slice(0, -1);
                                        return (
                                            <Comment key={i}>
                                                <Text>{val.node.bodyText}</Text>
                                                <Created>Created at:  {date}, {time}</Created>
                                            </Comment>
                                        )
                                    }
                                })}
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}
