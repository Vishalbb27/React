import React, { useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = React.useContext(ContactContext);

  const { addContact, clearCurrent, current, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const clearAll = () => {
    clearCurrent();
  };

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    } else {
      updateContact(contact);
      clearAll();
    }
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <h2 className="text-primary text-align-center">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5 className="text-sm">Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block form-control my-2"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
