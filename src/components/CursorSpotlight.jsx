import React, { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight || !window.matchMedia('(pointer: fine)').matches) {
      if (spotlight) spotlight.style.display = 'none';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    function renderSpotlight() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(renderSpotlight);
    }

    window.addEventListener('mousemove', onMouseMove);
    renderSpotlight();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div className="cursor-spotlight" ref={spotlightRef} aria-hidden="true" />;
};

export default CursorSpotlight;
