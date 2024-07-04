import React, { useEffect } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import CoverSection from './sections/CoverSection';
import CareerSection from './sections/CareerSection';
import ContactSection from './sections/ContactSection';

/**
 * Displays the landing page/only page of the site.
 * @constructor
 */
function LandingPage() {
  // load particles animation
  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-sky-950 w-full h-full">
      <div className="text-white flex flex-col items-center">
        {/* Cover section */}
        <CoverSection />
        {/*  Career section */}
        <CareerSection />
        {/*  Contact section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default LandingPage;
