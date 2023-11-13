import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectCurrentId,
} from 'redux/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { deleteContactThunk } from 'redux/operations';
import Loader from 'components/loader/Loader';
import { StyledListUl } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const currentId = useSelector(selectCurrentId);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, isLoading]);

  const filterContact = getFilterContacts();

  return (
    <StyledListUl>
      {filterContact.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          {isLoading && currentId === contact.id ? (
            <button disabled>
              <Loader />
            </button>
          ) : (
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </StyledListUl>
  );
};

export default ContactList;
