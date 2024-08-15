import HeaderImage from "../../images/header_bg_2.jpg";
import Header from "./../../component/Header";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        assumenda magnam perferendis earum, repudiandae consectetur.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
