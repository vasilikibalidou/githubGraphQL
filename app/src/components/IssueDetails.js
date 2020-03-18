import React, { Component } from "react";
import styled from "styled-components";

const Comment = styled.div`
    padding: 2vh;
`;

const Text = styled.p`
    font-size: 1.5em;
`;

const Created = styled.p`
font-size: 1em;
`;

const Input = styled.input`
  padding: 2vh;
  width: 30vw;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
`;

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
        console.log("details props: ", this.props.state.data?.issues)
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
