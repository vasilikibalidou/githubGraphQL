import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TabsView from "./components/TabsView";
import SearchBar from "./components/SearchBar";
import IssueDetails from "./components/IssueDetails"

class App extends Component {
  state = {
    username: "",
    repo: "",
    data: null
  }

  updateFields = (username, repo, data) => {
    this.setState({
      username: username,
      repo: repo,
      data: data
    })
  }

  render() {
    return (
      < div className="App" >
        <Route exact path="/" render={() => (
          <div>
            <SearchBar state={this.state} updateFields={this.updateFields} />
            <TabsView state={this.state} />
          </div>
        )} />
        <Route path="/:issueId" render={props => (
          <IssueDetails state={this.state} issueId={props.match.params.issueId} />
        )} />
      </div >
    );
  }
}

export default App;
