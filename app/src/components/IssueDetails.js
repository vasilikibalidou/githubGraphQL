import React, { Component } from "react";
import styled from "styled-components";

export default class IssueDetails extends Component {
    render() {
        console.log("details props: ", this.props.state.data?.issues)
        return (
            <div>
                {this.props.state.data?.issues.edges.map(val => {
                    if (val.node.id === this.props.issueId) {
                        return (
                            <div key={val.node.id}>
                                <h2>{val.node.bodyText}</h2>
                                {val.node.comments.edges.map((val, i) => {
                                    return (
                                        <div key={i}>{val.node.bodyText} {val.node.createdAt}</div>
                                    )
                                })}
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}
