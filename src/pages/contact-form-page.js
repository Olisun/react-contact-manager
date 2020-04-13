import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ContactForm from '../components/contact-form';
import { flashErrorMessage } from '../components/flash-message';
import { ContactContext } from '../context/contact-context';

// Function for determining if a contact is new or one that will be updated.  When the page loads, it checks if an _id exists in the URL. If there isn’t one, it will simply load a blank form which can be used to create a new contact. Otherwise, it will perform a fetch query and populate state.contact via the dispatch function.
export default function ContactFormPage({ match }) {
  const [state, dispatch] = useContext(ContactContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // grab URL _id
    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3030/contacts/${_id}`);
          dispatch({
            type: 'FETCH_CONTACT',
            payload: response.data,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <ContactForm contact={state.contact} />
    </div>
  );
}