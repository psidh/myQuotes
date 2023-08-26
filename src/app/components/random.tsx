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
  "Judging happens with a glass(filter) that is made by our experience, what we read, how much we know about the world \nIf this glass is transparent (which can be by gaining more knowledge and intelligence) then the apparent judgement is the closest to objective Truth ",
  "Motivation is given to the person who is stuck, not to one who has not yet started",
  "Every Political party wants hundred-percent unconditional, voluntary loyalty towards them",
  "Focus and cold-blood is a deadly combination",
  "There are only 2 genders",
  "Mind should work like a switch ON/OFF while working, like opening laser with a tap on what ever you're doing",
  "Be Vegetarian else eat jhatka",
  "Materialistic pleasures are just like materialist pleasures, intoxicating and deadly",
  "Sanatan Dharma cannot perish until we fight",
];
let randomIndex = -1;

const Blog = () => {
  const [randomQuote, setRandomQuote] = useState("");
  
  const getRandomQuote = () => {
    randomIndex += 1;

    // Check if randomIndex is within the bounds of Quotes array
    if (randomIndex < Quotes.length) {
      setRandomQuote(Quotes[randomIndex]);
    } else {
      // Handle reaching the end of the Quotes array
      setRandomQuote("I am thinking of quotes, until then goodbye !! 😌");
    }
  };
  return (
    <div className="font-ambit">
      <GlobalStyle />
      <main id="blog">
        <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 ">
          <h2 className="text-black md:text-4xl text-3xl font-semibold text-center md:text-left dark:text-white mb-8">Get More...</h2>
          <div>
            <div className="grid gap-4">
              <div className="flex-1 h-full">
                <div className="bg-gradient-to-l from-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-blue-300 dark:to-pink-300 rounded-xl shadow-lg p-4">
                  <p className="mt-2 dark:text-black text-white">
                    {randomQuote || "Click button for a random quote"}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                <button
                  className=" mt-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white py-2 px-4 rounded-lg"
                  onClick={getRandomQuote}
                >
                  Generate Quote
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
