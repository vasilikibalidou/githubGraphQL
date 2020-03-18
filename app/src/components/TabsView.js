import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

const TabBar = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  font-weight: bold;
  padding: 2vh;
`;

const Result = styled.div`
    padding: 1.5vh;
    font-size: 1.5em;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default class TabsView extends Component {
    render() {
        console.log("tabs props: ", this.props.state.data)
        return (
            <Tabs>
                <TabBar>
                    <Tab>Pull Requests</Tab>
                    <Tab>Open Issues</Tab>
                    <Tab>Closed Issues</Tab>
                </TabBar>

                <TabPanel>
                    {this.props.state.data?.pullRequests.edges.map((val, i) => {
                        return <Result key={i}>{val.node.title}</Result>
                    })}
                </TabPanel>
                <TabPanel>
                    {this.props.state.data?.issues.edges.map((val, i) => {
                        if (val.node.state === "OPEN") {
                            return (
                                <Result key={i}>
                                    <StyledLink to={`/${val.node.id}`}>{val.node.bodyText}</StyledLink>
                                </Result>
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel>
                    {this.props.state.data?.issues.edges.map((val, i) => {
                        if (val.node.state === "CLOSED") {
                            return (
                                <Result key={i}>
                                    <StyledLink to={`/${val.node.id}`}>{val.node.bodyText}</StyledLink>
                                </Result>
                            )
                        }
                    })}
                </TabPanel>
            </Tabs>
        );
    }
}
