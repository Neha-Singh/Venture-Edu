import React, { useState } from "react";
import "../../styles/Program/curriculum.css";

import c1 from "../../assets/program-images/curriculum/carousalimage1.png";
import c2 from "../../assets/program-images/curriculum/carousalimage2.png";
import c3 from "../../assets/program-images/curriculum/carousalimage3.png";
import arrowForward from "../../assets/program-images/curriculum/arrowforward.svg";
import arrowBack from "../../assets/program-images/curriculum/arrowback.svg";
import CurriculumContent from "./CurriculumContent.jsx";

const Curriculum = () => (
  <>
    <section className="curriculum">
      <div className="curriculum__inner">
        <div className="curriculum__heading">
          <h2>Curriculum</h2>
        </div>
        <div className="curriculum__content">
          <p>
            Our curriculum for the entrepreneur training program equips aspiring
            entrepreneurs with every skill they need to launch, scale, and lead
            a successful venture. Each module blends interactive lectures,
            hands-on labs, real startup case studies, and one-on-one mentor
            clinics.
          </p>
        </div>
      </div>
    </section>{" "}
    {/* Carousel */}
    <section className="curriculum__carousel">
      <Carousel />
      <CurriculumContent />
    </section>
  </>
);

const Carousel = () => {
  // repeat 1-3 twice for 6 slides
  const images = [c1, c2, c3, c1, c2, c3];
  const visibleCount = 3;
  const maxIndex = images.length - visibleCount; // 6 - 3 = 3
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));

  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));
  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${(index * 100) / visibleCount}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="carousel__item">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        <button onClick={prev}>
          <img src={arrowBack} alt="Prev" loading="lazy" />
        </button>
        <button onClick={next}>
          <img src={arrowForward} alt="Next" loading="lazy" />
        </button>
      </div>
    </div>
  );
};

export default Curriculum;
