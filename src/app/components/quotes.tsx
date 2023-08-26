"use client"
// src/components/Blog.js
import React , {useEffect} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Quotes from "../data/data";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
const Blog = () => {

  return (
        <div className="">
          <main id="blog">
            <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 ">
              <h2 className="text-black md:text-4xl text-3xl font-semibold text-center md:text-left dark:text-white mb-8">Quotes</h2>
              <div >
                <div className="grid gap-4">
                  {Quotes.map((post, index) => (
                    <div key={index} className="flex-1 h-full"> {/* Added className */}
                      <div className="bg-gradient-to-l 
                      from-blue-400 to-blue-600 
                      dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600
                      rounded-xl shadow-lg p-4"> {/* Added h-full */}
                        <p className="mt-2 dark:text-black text-white">{post.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
  );
};

export default Blog;
