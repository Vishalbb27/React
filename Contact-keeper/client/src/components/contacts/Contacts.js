import React, { useEffect, useContext, Fragment } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Contacts = () => {
  const context = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = context;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts ==null && contacts.length === 0 && !loading && filtered === null) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null 
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem key={contact._id} contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem key={contact._id} contact={contact} />
              </CSSTransition> 
            ))} 
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
