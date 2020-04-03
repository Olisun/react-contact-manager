import React, { useContext, useEffect } from 'react';

import ContactList from '../components/contact-list';
import { ContactContext } from '../context/contact-context';

const data = [
  {
    _id: '1',
    name: {
      first: 'Oliver',
      last: 'Sun',
    },
    phone: '415-967-8626',
    email: 'olisun@mac.com',
  },
  {
    _id: '2',
    name: {
      first: 'Taylor',
      last: 'Sun',
    },
    phone: '415-967-8800',
    email: 'wiggly@mac.com',
  },
  {
    _id: '3',
    name: {
      first: 'Oliver',
      last: 'Sun',
    },
    phone: '415-967-8626',
    email: 'olisun@mac.com',
  },
  {
    _id: '4',
    name: {
      first: 'Taylor',
      last: 'Sun',
    },
    phone: '415-967-8800',
    email: 'wiggly@mac.com',
  },
];

export default function ContactListPage() {
  const [state, dispatch] = useContext(ContactContext);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: data,
    });
  }, [dispatch]);

  return (
    <div>
      <h1>List of Contacts</h1>
      <ContactList contacts={state.contacts} />
    </div>
  );
}