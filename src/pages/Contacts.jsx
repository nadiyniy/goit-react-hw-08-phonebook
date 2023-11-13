import React, { useEffect } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import { LoaderBig } from 'components/loader/Loader';
import Notification from 'components/notifications/Notification';
import { fetchDataThunk } from 'redux/operations';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { StyledMainWrapper } from 'components/App.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const findContact = contacts.filter(contact =>
    contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <StyledMainWrapper>
      <div>
        <h1>
          <GrContactInfo /> <span>Phonebook</span>
        </h1>
        <ContactForm />
        {contacts.length ? <Filter /> : null}
      </div>
      <div>
        {isLoading && !contacts.length && !findContact.length ? (
          <LoaderBig />
        ) : contacts.length && findContact.length ? (
          <ContactList />
        ) : (
          <Notification message={'No existing contacts...'} />
        )}
      </div>
    </StyledMainWrapper>
  );
};

export default Contacts;
