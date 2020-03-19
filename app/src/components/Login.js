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


export default class Login extends Component {
    state = {
        token: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateFields(this.state.token)
    };

    render() {
        console.log("login props: ", this.props)
        console.log("login state: ", this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="password"
                    id="token"
                    name="token"
                    placeholder="access token"
                    value={this.state.token}
                    onChange={this.handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}
