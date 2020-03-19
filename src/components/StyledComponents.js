import styled from "styled-components";
import { Link } from "react-router-dom";
import { TabList, Tab } from "react-tabs";

export const Form = styled.form`
  padding: 10vh 0 5vh 0;
`;

export const Input = styled.input`
  padding: 2vh;
  width: 30vw;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
  margin: 2vh 0.5vw 2vh 0;
`;

export const Button = styled.button`
  padding: 2vh;
  font-size: 1em;
  width: 10vw;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 2vh 2vw 0 0;
`;

export const TabBar = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  font-weight: bold;
  padding: 2vh;
`;

export const StyledTab = styled(Tab)`
  text-decoration: underline;
`;

export const Result = styled.div`
    padding: 1.5vh;
    font-size: 1.5em;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Comment = styled.div`
    padding: 2vh;
    display: flex;
    justify-content: space-between;
    width: 60vw;
    margin: 0 auto;
`;

export const Text = styled.span`
    font-size: 1.2em;
    width: 40vw;
    text-align: left;
`;

export const Created = styled.span`
    font-size: 1em;
    width: 20vw;
`;