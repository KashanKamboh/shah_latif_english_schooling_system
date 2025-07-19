"use client";

import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div>
      <section>
      {/* Mobile: Only text, no image */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center justify-center text-center w-full px-4 py-6 bg-green-900">
          <h2 className="text-3xl font-bold text-white mb-6 italic">SHAH LATIF ENGLISH SCHOOLING SYSTEM</h2>
          <p className="text-xl text-white leading-relaxed italic">At Shah Latif English Schooling System, we empower students to become confident, creative, and compassionate leaders of tomorrow. Our commitment is to foster a vibrant learning environment where academic excellence, personal growth, and strong moral values go hand in hand. Join us on a journey where every child’s potential is nurtured and their dreams are given wings.</p>
        </div>
      </div>
      {/* Desktop: Background image with overlayed text */}
      <div className="hidden md:flex relative h-screen w-full items-center justify-center bg-green-900 overflow-hidden">
        <Image
          src="/images/school3.png"
          alt="Hero"
          fill
          className="object-cover w-full h-full absolute inset-0 z-0 opacity-70"
          sizes="100vw"
        />
        <div
          ref={textRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center w-full px-4"
        >
          <h2 className={`md:text-6xl text-3xl font-bold text-white mb-12 drop-shadow-lg italic ${inView ? "animate-fade-in-up" : "opacity-0"}`}>SHAH LATIF ENGLISH SCHOOLING SYSTEM</h2>
          <p className={`md:text-3xl text-xl text-white leading-relaxed italic ${inView ? "animate-fade-in-up" : "opacity-0"}`}>At Shah Latif English Schooling System, we empower students to become confident, creative, and compassionate leaders of tomorrow. Our commitment is to foster a vibrant learning environment where academic excellence, personal growth, and strong moral values go hand in hand. Join us on a journey where every child’s potential is nurtured and their dreams are given wings.</p>
        </div>
      </div>
      
      </section>
    </div>
  );
};

export default Hero;
