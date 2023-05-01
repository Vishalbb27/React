import React from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";
const ContactItem = ({ contact }) => {
  const contactContext = React.useContext(ContactContext);
    const { deleteContact ,setCurrent ,clearCurrent} = contactContext;
  
    const onDelete = () => {
        deleteContact(contact._id);
        clearCurrent();
    }

  return (
    <div className="card bg-light mt-2 p-2">
        
      <h3 className="text-primary text-left">
        {contact.name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (contact.type === "professional"
              ? "badge-success"
              : "badge-primary")
          }
        >
          {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {contact.email && (
          <li>
            <i className="fa-envelope"></i> {contact.email}
          </li>
        )}
        {contact.phone && (
          <li>
            <i class="bi bi-telephone"></i> {contact.phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm m-2" onClick={()=>setCurrent(contact)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;
