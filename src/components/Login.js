import React, { Component } from "react";
import { Form, Input, Button } from "./StyledComponents";

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
