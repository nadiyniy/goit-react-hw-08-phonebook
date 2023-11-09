import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { StyledContactForm } from './ContactForm.styled';
import { addContactThunk } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const isDublicate = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isDublicate) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContactThunk(newContact));
    }
  };

  const handelOnChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handelOnSubmit = e => {
    e.preventDefault();

    const newContact = {
      number: number.trim(),
      name: name.trim(),
    };

    if (!name.trim()) {
      return;
    }

    handleAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <StyledContactForm onSubmit={handelOnSubmit}>
      <label>
        Name:
        <input
          onChange={handelOnChange}
          value={name}
          placeholder="Enter name"
          name="name"
          required
        />
      </label>
      <label>
        Number:
        <input
          onChange={handelOnChange}
          value={number}
          placeholder="Enter number"
          type="tel"
          name="number"
          required
        />
      </label>
      <button>Add contact</button>
    </StyledContactForm>
  );
};

export default ContactForm;
