import PropTypes from "prop-types";
import React from "react";
import { deleteContact } from "redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";

const showContacts = (contacts, filteredContacts) => {
  if (filteredContacts === "") {
    return contacts
  } else {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filteredContacts.filter))
  }
}

export const ContactList = () => {

  const contacts = useSelector(state => state.contacts)
  const filteredContacts = useSelector(state => state.filter)
  const shownContacts = showContacts(contacts, filteredContacts)
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => dispatch(deleteContact(id))

    return (
        <ul className={css.contactsList}>
      {shownContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactsItem}>
            
            <p className={css.contactsName}>{contact.name}</p>
            <p className={css.contactsNumber}>{contact.number}</p>
            <button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
              className={css.contactsButton}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ),
}

// base code from hw-04
// export const ContactList = ({ contacts, onClick }) => {

//     const deleteContact = (id) => {
//         onClick(id)
//     }

//   if (contacts.length === 0) {
//     return null
//   }
    
//     return (
//         <ul className={css.contactsList}>
//       {contacts.map(contact => {
//         return (
//           <li key={contact.id} className={css.contactsItem}>
//             <p className={css.contactsName}>{contact.name}</p>
//             <p className={css.contactsNumber}>{contact.number}</p>
//             <button
//               type="button"
//               onClick={() => deleteContact(contact.id)}
//               className={css.contactsButton}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired
//         }).isRequired
//     ),
// }