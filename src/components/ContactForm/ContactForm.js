import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../redux/Selectors';
import { addContact } from '../redux/Operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ phone }) => phone === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, phone: formNumber }));
    form.reset();
  };

  return (
    <form  className={css.ContForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.LblForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -]?[a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </label>
        <br />
      <label className={css.LblForm}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />
      </label>
      <button  className={css.BtnForm} type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;