import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

const TabBar = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.5em;
  font-weight: bold;
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
                        return (
                            <p key={i}>{val.node.title}</p>
                        )
                    })}
                </TabPanel>
                <TabPanel>
                    {this.props.state.data?.issues.edges.map((val, i) => {
                        if (val.node.state === "OPEN") {
                            return (
                                <Link to={`/${val.node.id}`} key={i}>{val.node.bodyText}</Link>
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel>
                    {this.props.state.data?.issues.edges.map((val, i) => {
                        if (val.node.state === "CLOSED") {
                            return (
                                <Link to={`/${val.node.id}`} key={i}>{val.node.bodyText}</Link>
                            )
                        }
                    })}
                </TabPanel>
            </Tabs>
        );
    }
}
