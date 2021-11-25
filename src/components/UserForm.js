import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const getInitialValues = () => ({
  username: '',
  email: '',
  password: ''
});

const UserForm = ({ formType, action }) => {
  const [values, setValues] = useState(getInitialValues());

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    action({
      variables: {
        ...values
      }
    });
  };

  return (
    <Wrapper>
      <h2>{formType === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      <Form onSubmit={onSubmit}>
        {formType === 'signup' && (
          <React.Fragment>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={values.username}
              onChange={onChange}
            />
          </React.Fragment>
        )}

        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
          value={values.password}
          onChange={onChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;
