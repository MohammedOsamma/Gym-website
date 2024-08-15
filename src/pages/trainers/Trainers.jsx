import HeaderImage from "../../images/header_bg_5.jpg";
import Header from "./../../component/Header";
import Trainer from "../../component/Trainer";
import { trainers } from "./../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Out Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt harum
        incidunt, accusamus adipisci illum earum!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              id={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebookF />, link: socials[2] },
                { icon: <FaLinkedinIn />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
