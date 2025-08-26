import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "../../styles/Program/curriculum.css";

import c1 from "../../assets/program-images/curriculum/carousalimage1.png";
import c2 from "../../assets/program-images/curriculum/carousalimage2.png";
import c3 from "../../assets/program-images/curriculum/carousalimage3.png";
import arrowForward from "../../assets/program-images/curriculum/arrowforward.svg";
import arrowBack from "../../assets/program-images/curriculum/arrowback.svg";
import CurriculumContent from "./CurriculumContent.jsx";
import CurriculumActivities from "./CurriculumActivities.jsx";
import DailySchedule from "./dailyschedule.jsx";

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
    </section>

    {/* Carousel */}
    <section className="curriculum__carousel">
      <Carousel />
      <CurriculumContent />
      <CurriculumActivities />
      <DailySchedule />
    </section>
  </>
);

/* compute slides per view by breakpoint */
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w <= 767) return 1; // mobile
  if (w <= 1024) return 2; // tablet
  return 3; // desktop
};

const Carousel = () => {
  // repeat 1-3 twice for 6 slides
  const images = useMemo(() => [c1, c2, c3, c1, c2, c3], []);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0);

  const maxIndex = images.length - visibleCount; // wraps at end

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? maxIndex : i - 1)),
    [maxIndex]
  );
  const next = useCallback(
    () => setIndex((i) => (i === maxIndex ? 0 : i + 1)),
    [maxIndex]
  );

  // --- autoplay (every 3s), pause on hover/touch/hidden tab ---
  const isPaused = useRef(false);
  const nextRef = useRef(next);
  useEffect(() => {
    nextRef.current = next; // always call latest next()
  }, [next]);

  useEffect(() => {
    let id;
    const tick = () => {
      if (!isPaused.current) nextRef.current();
      id = setTimeout(tick, 3000); // change slide every 3s
    };
    id = setTimeout(tick, 3000);

    const onVis = () => {
      isPaused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearTimeout(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const pause = () => {
    isPaused.current = true;
  };
  const resume = () => {
    isPaused.current = false;
  };

  // update slides-per-view on resize and clamp index
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const newMax = images.length - visibleCount;
    setIndex((i) => Math.min(i, newMax));
  }, [visibleCount, images.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${(index * 100) / visibleCount}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="carousel__item">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      <div className="carousel__controls" aria-label="Carousel controls">
        <button type="button" onClick={prev} aria-label="Previous slide">
          <img src={arrowBack} alt="" loading="lazy" />
        </button>
        <button type="button" onClick={next} aria-label="Next slide">
          <img src={arrowForward} alt="" loading="lazy" />
        </button>
      </div>
    </div>
  );
};

export default Curriculum;
