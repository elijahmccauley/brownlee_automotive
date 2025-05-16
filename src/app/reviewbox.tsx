"use client";
import Image from "next/image";
import ImageBackground from "next/image";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import 'tailwindcss/tailwind.css';
//import { ImageCarousel } from 'image-auto-scroll';
import { StyleSheet, View } from "react-native";

export default function Home() {
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/sendReview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review, email }),
    });

    if (res.ok) {
      setStatus('Review sent successfully!');
      setReview('');
      setEmail('');
    } else {
      setStatus('Failed to send review.');
    }
  };

  return (
    <div className="p-4 bg-[#8A1118] rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Leave a Review</h2>
      <input
        className="border p-2 w-full mb-2 text-black"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2 text-black bg-white"
        rows={4}
        placeholder="Your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button
        className="bg-white text-black px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </div>
  );
}
