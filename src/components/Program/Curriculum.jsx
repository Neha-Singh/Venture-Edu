import React, { useRef, useEffect } from "react";
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
            Program equips aspiring entrepreneurs with every skill they need to
            launch, scale, and lead a successful venture. Each module blends
            interactive lectures, hands-on labs, real startup case studies, and
            one-on-one mentor clinics
          </p>
        </div>
      </div>
    </section>

    <section className="curriculum__carousel">
      {/* <Carousel /> */}
      <CurriculumContent />
      {/* <CurriculumActivities /> */}
      <DailySchedule />
    </section>
  </>
);

// const Carousel = () => {
//   // duplicate images for seamless loop
//   const images = [c1, c2, c3, c1, c2, c3];

//   const trackRef = useRef(null);
//   const rafId = useRef(null);
//   const lastTs = useRef(0);
//   const offsetPx = useRef(0);
//   const isPaused = useRef(false);

//   // pixels per second (adjust to taste)
//   const SPEED_PX_S = 40;

//   // ensure no CSS transition interferes
//   useEffect(() => {
//     const track = trackRef.current;
//     if (track) track.style.setProperty("transition", "none", "important");
//   }, []);

//   // continuous animation loop with pause support
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const step = (ts) => {
//       if (!lastTs.current) lastTs.current = ts;

//       // If paused, keep time in sync to avoid jump on resume
//       if (isPaused.current) {
//         lastTs.current = ts;
//       } else {
//         const dt = (ts - lastTs.current) / 1000;
//         lastTs.current = ts;

//         offsetPx.current += SPEED_PX_S * dt;

//         const first = track.children[0];
//         if (first) {
//           const w = first.getBoundingClientRect().width || 0;

//           // Move fully-scrolled items from start to end
//           while (offsetPx.current >= w && track.children.length > 0) {
//             track.appendChild(track.children[0]);
//             offsetPx.current -= w;
//           }
//         }
//       }

//       track.style.transform = `translateX(-${offsetPx.current}px)`;
//       rafId.current = requestAnimationFrame(step);
//     };

//     rafId.current = requestAnimationFrame(step);
//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   // manual controls (instant rotate without breaking loop)
//   const next = () => {
//     const track = trackRef.current;
//     if (!track || track.children.length === 0) return;
//     const first = track.children[0];
//     const w = first.getBoundingClientRect().width || 0;
//     track.appendChild(first);
//     offsetPx.current = Math.max(0, offsetPx.current - w);
//     track.style.transform = `translateX(-${offsetPx.current}px)`;
//     lastTs.current = performance.now(); // avoid time jump after click
//   };

//   const prev = () => {
//     const track = trackRef.current;
//     if (!track || track.children.length === 0) return;
//     const last = track.children[track.children.length - 1];
//     const w = last.getBoundingClientRect().width || 0;
//     track.insertBefore(last, track.children[0]);
//     offsetPx.current += w;
//     track.style.transform = `translateX(-${offsetPx.current}px)`;
//     lastTs.current = performance.now();
//   };

//   // reset offset on resize for stable widths across breakpoints
//   useEffect(() => {
//     const onResize = () => {
//       offsetPx.current = 0;
//       lastTs.current = performance.now();
//       if (trackRef.current) {
//         trackRef.current.style.transform = "translateX(0px)";
//       }
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // hover/touch pause handlers
//   const pause = () => {
//     isPaused.current = true;
//   };
//   const resume = () => {
//     isPaused.current = false;
//   };

//   return (
//     <div
//       className="carousel"
//       onMouseEnter={pause}
//       onMouseLeave={resume}
//       onTouchStart={pause}
//       onTouchEnd={resume}
//     >
//       <div ref={trackRef} className="carousel__track">
//         {images.map((src, i) => (
//           <div key={i} className="carousel__item">
//             <img src={src} alt="" loading="lazy" decoding="async" />
//           </div>
//         ))}
//       </div>

//       <div className="carousel__controls" aria-label="Carousel controls">
//         <button type="button" onClick={prev} aria-label="Previous slide">
//           <img src={arrowBack} alt="" loading="lazy" />
//         </button>
//         <button type="button" onClick={next} aria-label="Next slide">
//           <img src={arrowForward} alt="" loading="lazy" />
//         </button>
//       </div>
//     </div>
//   );
// };

export default Curriculum;
