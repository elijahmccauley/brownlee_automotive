"use client";
import Image from "next/image";
import ImageBackground from "next/image";
// import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import 'tailwindcss/tailwind.css';

export default function Home() {
  const hours = [
    ["Monday", "8:00 AM - 6:00 PM"],  
    ["Tuesday", "8:00 AM - 6:00 PM"],
    ["Wednesday", "8:00 AM - 6:00 PM"],
    ["Thursday", "8:00 AM - 6:00 PM"],
    ["Friday", "8:00 AM - 6:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ];
  const work = [
    ["/work1.jpg", "work1"],
    ["/work2.jpg", "work2"],
    ["/work3.jpg", "work3"],
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % 3);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  return (
    <div className="min-h-screen bg-[#8A1118] p-6 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white text-center">
      <main className="max-w-8xl mx-auto flex flex-col items-center gap-8">
        <section className="sm:text-8xl text-4xl font-[family-name:var(--font-geist-mono)] text-center items-center">
          <p className="tracking-tight text-center">BROWNLEE AUTOMOTIVE</p>
        </section>

        <section className="text-xl font-sans items-center">
          <p className="tracking-tight text-center">Family owned and operated since 1987</p>
          <p className="tracking-tight text-center">We work on all makes and models</p>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="w-full relative">
            <button
              onClick={handlePrev}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray text-white rounded disabled:opacity-50 z-10`}
            >
            <FontAwesomeIcon icon={faArrowLeft} className="lg" />
            </button>
        
            {work.slice(currentIndex, currentIndex + 1).map(([src, alt]) => (
              <div key={alt} className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                <Image
                  key={alt}
                  className="dark:invert"
                  src={src}
                  alt={alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
                </div>
              </div>
            ))}
            <button
              onClick={handleNext}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray text-white rounded disabled:opacity-50 z-10`}
            >
            <FontAwesomeIcon icon={faArrowRight} className="lg" />
            </button>
          </div>
        </section>

        <section className="text-sm font-[family-name:var(--font-geist-mono)] text-center sm:text-left">
          <p className="tracking-tight">📞 +1 (770) 469-9660</p>
          <p className="tracking-tight">📍 6573 James B Rivers Memorial Dr, Stone Mountain, GA 30083</p>
        </section>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11228.428422269608!2d-84.17213790897657!3d33.80785411122952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5af53422d0793%3A0xf06df791288944d2!2sBrownlee%20Automotive!5e0!3m2!1sen!2sus!4v1747107496293!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <section className="w-full">
          <h2 className="text-lg font-semibold mb-2">Hours</h2>
          <table className="table-auto border-collapse border border-white text-sm w-full">
            <thead>
              <tr>
                <th className="border border-white px-4 py-2">Day</th>
                <th className="border border-white px-4 py-2">Hours</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((row, idx) => (
                <tr key={idx}>
                <td className="border border-white px-4 py-2">{row[0]}</td>
                <td className="border border-white px-4 py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="w-full text-black text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="bg-white rounded shadow-lg leading-relaxed text-sm p-6">I recently had my truck's transmission repaired at Brownlee Automotive, and I couldn't be happier with the service. Brett, the service technician, was extremely knowledgeable and efficient, ensuring the repair was done right the first time. I highly recommend Brownlee Automotive for their excellent work and professional staff.</p>
          <p className="bg-white rounded shadow-lg leading-relaxed text-sm p-6">RL and Brett at Brownlee Automotive have kept my 2004 Honda Oddysey running for over 380 thousand miles</p>
        </section>
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Leave a review"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full justify-items-center">
          {[
            ["/acdelco.png", "acgmdelco_logo"],
            ["/ase.jpg", "ase_logo"],
            ["/NAPA-Logo.png", "napa_logo"],
          ].map(([src, alt]) => (
            <Image
              key={alt}
              className="dark:invert"
              src={src}
              alt={alt}
              width={180}
              height={38}
              priority
            />
          ))}
        </section>
      </main>
      
      
    </div>
  );
}
