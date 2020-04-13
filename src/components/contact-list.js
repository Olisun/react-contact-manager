import React from 'react';
import { Card } from 'semantic-ui-react';

import ContactCard from './contact-card';

export default function ContactList({ contacts }) {
  // mapping contacts data into a CopntqctCard for eac contact from the DB. 
  const cards = () => {
    return contacts.map(contact => {
      return <ContactCard key={contact._id} contact={contact} />
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}