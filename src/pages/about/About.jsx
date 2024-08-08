import HeaderImage from "../../images/header_bg_1.jpg";
import Header from "../../component/Header";
import "./about.css";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        ipsa. Temporibus facere perferendis quam quaerat obcaecati perspiciatis,
        sunt fugit quasi?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              quam id temporibus, saepe ipsam voluptatum velit minus placeat
              provident, itaque pariatur consequuntur esse molestias at error,
              dicta unde accusantium. Cum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              deserunt eveniet blanditiis distinctio sequi veniam excepturi
              voluptas doloremque rerum libero!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              tenetur iure, at ad soluta quaerat!
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              quam id temporibus, saepe ipsam voluptatum velit minus placeat
              provident, itaque pariatur consequuntur esse molestias at error,
              dicta unde accusantium. Cum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              deserunt eveniet blanditiis distinctio sequi veniam excepturi
              voluptas doloremque rerum libero!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              quam id temporibus, saepe ipsam voluptatum velit minus placeat
              provident, itaque pariatur consequuntur esse molestias at error,
              dicta unde accusantium. Cum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              deserunt eveniet blanditiis distinctio sequi veniam excepturi
              voluptas doloremque rerum libero!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              tenetur iure, at ad soluta quaerat!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
