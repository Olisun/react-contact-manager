import React from 'react';
import { Message } from 'semantic-ui-react';

// Error handling functions. 
export default function FlashMessage({ message }) {
  return (
    <Message
      positive={message.type === 'success'}
      negative={message.type === 'fail'}
      header={message.title}
      contect={message.content}
    />
  );
}

export function flashErrorMessage(dispatch, error) {
  // check to see if server or network error
  const err = error.response ? error.response.data : error;
  dispatch({
    type: 'FLASH_MESSAGE',
    payload: {
      type: 'fail',
      title: err.name,
      content: err.message,
    },
  });
}
