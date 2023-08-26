/* eslint-disable react-hooks/rules-of-hooks */
"use client";
// src/components/Blog.js
import React, { useState } from "react"; // Import useState
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

const Quotes = [
  "Knowledge is bliss, ignorance (if intended) is stupidity",
  "Judging happens with a glass(filter) that is made by our experience, what we read, how much we know about the world \nIf this glass is transparent (which can be by gaining more knowledge and intelligence) then the apparent judgement is the closest to objective Truth ",
  "Motivation is given to the person who is stuck, not to one who has not yet started",
  "Love (prema bhakti) is the highest form of service",
  "Surrending to Shri Krishna is the stepping block of your spiritual journey",
];

const Blog = () => {
  const [randomQuote, setRandomQuote] = useState(null);
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomQuote(Quotes[randomIndex]);
  };
  
  return (
    <div className="">
      <GlobalStyle />
      <main id="blog">
        <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 ">
          <h2 className="text-black md:text-4xl text-3xl font-semibold text-center md:text-left dark:text-white mb-8">random</h2>
          <div>
            <div className="grid gap-4">
              <div className="flex-1 h-full">
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 dark:bg-gradient-to-r dark:from-blue-300 dark:to-pink-300 rounded-xl shadow-lg p-4">
                  <p className="mt-2 dark:text-black text-white">
                    {randomQuote || "Click button for a random quote"}
                  </p>
                </div>
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                  onClick={getRandomQuote}
                >
                  Get Random Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
