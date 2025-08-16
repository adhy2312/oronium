// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I’m Adhithya Mohan, a passionate photographer and developer. 
          I love blending creativity with technology to bring ideas to life.
        </p>
      </div>
    </section>
  );
}
