import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  padding: 10vh 0 5vh 0;
`;

const Input = styled.input`
  padding: 2vh;
  width: 30vw;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 2vh;
  font-size: 1em;
  width: 10vw;
  border: 1px solid gray;
  border-radius: 5px;
`;

const accessToken = process.env.REACT_APP_TOKEN;

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
        Authorization: `bearer ${accessToken}`
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
          this.state.search.split("/")[0],
          this.state.search.split("/")[1],
          res.data?.repositoryOwner?.repository
        )
      })
  };

  render() {
    console.log(this.props)
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
