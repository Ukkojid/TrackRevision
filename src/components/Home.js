import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current, { x: -300 }, { x: 300, duration: 3, repeat: -1, yoyo: true });
  }, []);
// ref={imageRef}
  return (
    <div className="container mx-auto">
      <div className="relative h-96 w-full overflow-hidden">
        <img  src="https://images.app.goo.gl/7A3DwqbWFNi9xsGF6" className="absolute h-full object-cover" />
      </div>
      <div className="mt-8 text-center">
        // <h1 className="text-4xl font-bold">Welcome to TrackRevision</h1>
        <p className="mt-4 text-lg">
          Our website helps you track and remind you about your revisions. Easily schedule your study time, and receive notifications to never miss a revision.
        </p>
      </div>
    </div>
  );
};

export default Home;
