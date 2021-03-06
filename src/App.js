import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TabsView from "./components/TabsView";
import SearchBar from "./components/SearchBar";
import IssueDetails from "./components/IssueDetails"
import Login from "./components/Login";
import ChangeToken from "./components/ChangeToken";


class App extends Component {
  state = {
    accessToken: "",
    username: "",
    repo: "",
    data: null
  }

  updateFields = (accessToken, username, repo, data) => {
    this.setState({
      accessToken: accessToken,
      username: username,
      repo: repo,
      data: data
    })
  }

  render() {
    if (this.state.accessToken === "") {
      return (
        < div className="App" >
          <Login state={this.state} updateFields={this.updateFields} />
        </div>
      )
    }
    return (
      < div className="App" >
        <Route exact path="/" render={() => (
          <div>
            <ChangeToken state={this.state} updateFields={this.updateFields} />
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
