import React, { Component } from "react";
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
    state = {
        username: null,
        repo: null
    }

    render() {
        return (
            <Tabs>
                <TabBar>
                    <Tab>Pull Requests</Tab>
                    <Tab>Open Issues</Tab>
                    <Tab>Closed Issues</Tab>
                </TabBar>

                <TabPanel>
                    <p>Any content 1</p>
                </TabPanel>
                <TabPanel>
                    <p>Any content 2</p>
                </TabPanel>
                <TabPanel>
                    <p>Any content 3</p>
                </TabPanel>
            </Tabs>
        );
    }
}
