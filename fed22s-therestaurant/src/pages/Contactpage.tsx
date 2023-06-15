import ContactForm from "../components/Contact/ContactForm";
import { StyledForm } from "../components/Styled/StyledForm";
import map from "./../assets/photos/map.jpeg"
import "./ContactPage.scss"

export const Contactpage = () => {
  return (
    <>
      <div className="container">
        <form className="styled-form">
          <ContactForm></ContactForm>
        </form>
        <div className="form-image-container">
          <img src={map} alt="Pinned map" />
        </div>
      </div>
    </>
  );
};