import { useEffect, useRef, useState } from "react";

/**
 * useSwipeSlider
 *
 * @param {number} slideCount - number of slides
 * @param {number} autoplayMs - interval in ms (0 to disable autoplay)
 * @param {function} onIndexChange - optional callback when index changes
 */
export default function useSwipeSlider(
  slideCount,
  autoplayMs = 3000,
  onIndexChange
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  const autoplayRef = useRef(null);
  const sliderRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const dragPx = useRef(0);

  const thresholdPx = 50;

  // ----- Autoplay -----
  const startAutoplay = () => {
    stopAutoplay();
    if (
      autoplayMs > 0 &&
      !(
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
    ) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % slideCount;
          if (onIndexChange) onIndexChange(next);
          return next;
        });
      }, autoplayMs);
    }
  };
  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideCount, autoplayMs]);

  // ----- Helpers -----
  const getSliderWidth = () =>
    sliderRef.current ? sliderRef.current.offsetWidth : window.innerWidth || 1;

  // ----- Events -----
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    dragPx.current = 0;
    setDragOffsetPx(0);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
    stopAutoplay();
    sliderRef.current?.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (Math.abs(dy) > Math.abs(dx)) return; // let vertical scroll pass

    if (e.cancelable) e.preventDefault();
    dragPx.current = dx;
    setDragOffsetPx(dx);
  };

  const onPointerUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const moved = dragPx.current;
    if (moved <= -thresholdPx && currentIndex < slideCount - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      if (onIndexChange) onIndexChange(next);
    } else if (moved >= thresholdPx && currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      if (onIndexChange) onIndexChange(prev);
    }
    setDragOffsetPx(0);
    sliderRef.current?.classList.remove("is-dragging");
    startAutoplay();
  };

  const dragPercent = (dragOffsetPx / getSliderWidth()) * 100;
  const translateX = `calc(${-currentIndex * 100}% + ${dragPercent}%)`;

  return {
    sliderRef,
    currentIndex,
    setCurrentIndex,
    translateX,
    gestureHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}
