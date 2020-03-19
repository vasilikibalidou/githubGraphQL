import React, { Component } from "react";
import { Form, Input, Button } from "./StyledComponents";

export default class SearchBar extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${this.props.state.accessToken}`
      },
      body: JSON.stringify({
        query: `
                query($username: String!, $repo: String!){ 
                    repositoryOwner(login:$username){
                      login
                      repository(name:$repo){
                        name
                        pullRequests(first:20){
                          edges{
                            node{
                              title
                            }
                          }
                        }
                        issues(first:20){
                          edges{
                            node{
                              id
                              state
                              bodyText
                              comments(first:20){
                                edges{
                                  node{
                                    bodyText
                                    createdAt
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `,
        variables: {
          username: this.state.search.split("/")[0]?.trim(),
          repo: this.state.search.split("/")[1]?.trim()
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.updateFields(
          this.props.state.accessToken,
          this.state.search.split("/")[0],
          this.state.search.split("/")[1],
          res.data?.repositoryOwner?.repository
        )
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="username/repo"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}
