import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import ContactList from '../components/contact-list';
import { ContactContext } from '../context/contact-context';
import FlashMessage, { flashErrorMessage } from '../components/flash-message';


export default function ContactListPage() {
  const [state, dispatch] = useContext(ContactContext);

  // Using useEffect hook to make an API call to the database to fetch all contacts. 
  useEffect(() => {
    const fetchData = async () => {
      // try-catch function is used to implement the error handling functions in flash-message.js.
      try {
        const response = await axios.get('http://localhost:3030/contacts');
        // updating global state. 
        dispatch({
          type: 'FETCH_CONTACTS',
          payload: response.data.data || response.data, // in case pagenation is disabled
        });
        console.log(response);

      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>List of Contacts</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <ContactList contacts={state.contacts} />
    </div>
  );
}