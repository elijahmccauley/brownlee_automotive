import React from 'react';

export default function ReviewForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave a Review</h2>
      {/* Point the action to your Formspree endpoint */}
      <form action="https://formspree.io/f/mkgbppdn" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name" // The 'name' attribute is crucial. This becomes the label in the email.
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email (Not displayed publicly)</label>
          <input
            type="email"
            id="email"
            name="email" // 'email' is used by Formspree to detect the sender
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="review" className="block text-gray-700 font-medium mb-2">Your Review</label>
          <textarea
            id="review"
            name="message" // 'message' is a common name for the main content
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}