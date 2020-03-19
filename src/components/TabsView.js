import React, { Component } from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import { TabBar, Result, StyledLink } from "./StyledComponents";


export default class TabsView extends Component {
    render() {
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
