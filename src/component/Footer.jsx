import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            doloribus ea fugiat illo eos dicta voluptates velit quam unde quia!
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer nooperner"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer nooperner"
            >
              <FaFacebookF />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer nooperner">
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer nooperner"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 Osama &copy; All Right Reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
