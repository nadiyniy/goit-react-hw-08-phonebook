import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { StyledFilterDiv } from './Filter.styled';
import { filterContactAC } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handelOnFilter = e => {
    dispatch(filterContactAC(e.target.value));
  };

  return (
    <StyledFilterDiv>
      <h2>Contacts</h2>
      <input
        onChange={handelOnFilter}
        value={filter}
        placeholder="Find contact by name"
        name="filter"
      ></input>
    </StyledFilterDiv>
  );
};

export default Filter;
