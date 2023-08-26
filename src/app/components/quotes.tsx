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
              <h2 className=" md:text-4xl text-3xl font-semibold text-center md:text-left mb-8">Quotes</h2>
              <div >
                <div className="grid gap-4">
                  {Quotes.map((post, index) => (
                    <div key={index} className="flex-1 h-full"> {/* Added className */}
                      <div className="bg-green-100 dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-lime-400 p-4"> {/* Added h-full */}
                        <p className="mt-2 text-black dark:text-white">{post.content}</p>
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
