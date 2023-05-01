import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import contactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = React.useContext(AuthContext);
  React.useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          {<ContactFilter />}

          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
