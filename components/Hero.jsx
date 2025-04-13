import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-800 animate-fade-in"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-slide-down">Hi, I'm Arunprakash</h1>
        <p className="text-xl text-gray-300 animate-slide-up">
          A passionate developer specializing in building modern web applications.
        </p>
      </div>
    </section>
  );
};

export default Hero;