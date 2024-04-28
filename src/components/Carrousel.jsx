import aboutImg from "../assets/about.jpg";
import aboutImg2 from "../assets/about2Up.jpeg";
import aboutImg3 from "../assets/about3.jpg";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../index.css";

const Carrousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500, stopOnInteraction: false })]); // Reinicia autoplay después de una interacción manual);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img className="embla__image" src={aboutImg} />
        </div>
        <div className="embla__slide">
          <img className="embla__image" src={aboutImg2} />
        </div>
        <div className="embla__slide">
          <img className="embla__image" src={aboutImg3} />
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
