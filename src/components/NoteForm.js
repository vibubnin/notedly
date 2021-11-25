import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  padding: 10px;
`;

const NoteForm = props => {
  const [value, setValue] = useState({ content: props.content || '' });

  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    props.action({
      variables: {
        ...value
      }
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
};
export default NoteForm;