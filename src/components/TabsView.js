import React, { Component } from "react";
import { Tabs, TabPanel } from "react-tabs";
import { StyledTab, TabBar, Result, StyledLink } from "./StyledComponents";


export default class TabsView extends Component {
    render() {
        return (
            <Tabs>
                <TabBar>
                    <StyledTab>Pull Requests</StyledTab>
                    <StyledTab>Open Issues</StyledTab>
                    <StyledTab>Closed Issues</StyledTab>
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
