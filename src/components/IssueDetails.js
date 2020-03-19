import React, { Component } from "react";
import { Comment, Text, Created, Input } from "./StyledComponents";

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
                                        return (
                                            <Comment key={i}>
                                                <Text>{val.node.bodyText}</Text>
                                                <Created>Created at:  {val.node.createdAt}</Created>
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
