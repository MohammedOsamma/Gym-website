import FAQs from "../../component/FAQs";
import MainHeader from "../../component/MainHeader";
import Programs from "../../component/Programs";
import Values from "../../component/Values";
import Testimonials from "../../component/Testimonials";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
