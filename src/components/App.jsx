import React, { useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Notification from './notifications/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { StyledMainWrapper } from './App.styled';
import { GrContactInfo } from 'react-icons/gr';
import { fetchDataThunk } from 'redux/operations';
import { LoaderBig } from './loader/Loader';

export const App = () => {
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
