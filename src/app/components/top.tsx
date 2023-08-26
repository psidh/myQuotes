"use client";
import React from "react";
import Image from "next/image";
import styled, { createGlobalStyle , css } from "styled-components";
import { Autour_One } from "next/font/google";

// Create a global style that applies Ambit font to all text elements
const GlobalStyle = createGlobalStyle`
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .blinking {
    animation: blink 1s infinite;
  }

  .rounded-full {
    border-radius: 50%;
  }
`;

const Top = () => {
  return (
    <div>
    <div
      className="my-8 flex flex-col justify-center items-center bg-opacity-90"
    >
    <div data-aos-duration="500" data-aos="fade-in">
    <GlobalStyle />  
      <div className="px-4 flex justify-center items-center"> 
      </div>
      <section className="flex flex-col justify-center items-center md:pb-8 px-4 lg:px-18">
        <h2 className="md:text-2xl text-4xl font-semibold mt-2 py-2">
          <span className=" md:text-2xl text-lg font-normal dark:text-white text-gray-800">Hey, </span> 
          <span className="font-semibold md:text-4xl text-2xl 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-600 to-pink-600
          dark:bg-gradient-to-r dark:from-blue-400 dark:to-pink-400
           ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm P Sidharth</span></h2>
          <div className="px-4 lg:px-18 md:text-center text-center md:mb-8">
            <p className="md:text-2xl text-md dark:text-white text-gray-800">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm a Student, Developer 
            </p>
            <p className="md:text-2xl text-md dark:text-white text-gray-800">I Love Quotes and I have some of my own, please feel free to read and get inspired... 
              <span className="inline-flex opacity-50 text-2xl font-light blinking">|</span>
            </p>
          </div>
      </section>
      </div>
      </div>

    </div>
    
  );
};

export default Top;
