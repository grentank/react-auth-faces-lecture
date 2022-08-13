import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import axios from 'axios';
import { useUserContext } from '../Contexts/MyContexts';

export default function SignUp() {
  const { setUser } = useUserContext();
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const inputHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.password && input.email) {
      axios.post('/api/user/signup', input)
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
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
