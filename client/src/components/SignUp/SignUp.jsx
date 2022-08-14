import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useUserContext } from '../Contexts/MyContexts';
import { userSignUp } from '../../Redux/actions/userActions';

export default function SignUp() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const inputHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.password && input.email) {
      dispatch(userSignUp(input));
    }
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={inputHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={inputHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={inputHandler}
            />
          </FormGroup>
          <Button type="submit">Sign up</Button>
        </Form>
        {error && <p>Something is wrong</p>}
      </Col>
    </Row>
  );
}
