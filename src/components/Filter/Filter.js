import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../redux/FilterSlice';
import { selectContactsFilter } from '../redux/Selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <label className={css.SrchForm}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Enter a name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};