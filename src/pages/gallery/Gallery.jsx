import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "./../../component/Header";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (var i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
        reiciendis quas fugiat nulla. Unde!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`GalleryImage ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
