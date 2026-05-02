import React, { Suspense } from "react";
import Hero from "../../Component/home/Hero";
import Book from "../../Component/home/Book";
import Books from "../../Component/books/books";

const promise = async() => {
  const promisData = await fetch("/booksData.json").then((res) => res.json());
  return promisData
}

const HomePage = () => {
  const jsonData = promise();
  return (
    <div>
      <Hero />
      <Suspense fallback="Loddign...">
       <Books jsonData={jsonData}></Books>
      </Suspense>
    </div>
  );
};

export default HomePage;
