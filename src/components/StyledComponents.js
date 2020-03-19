import styled from "styled-components";
import { Link } from "react-router-dom";
import { TabList } from "react-tabs";

export const Form = styled.form`
  padding: 10vh 0 5vh 0;
`;

export const Input = styled.input`
  padding: 2vh;
  width: 30vw;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 2vh;
  font-size: 1em;
  width: 10vw;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const TabBar = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  font-weight: bold;
  padding: 2vh;
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
`;

export const Text = styled.p`
    font-size: 1.5em;
`;

export const Created = styled.p`
font-size: 1em;
`;