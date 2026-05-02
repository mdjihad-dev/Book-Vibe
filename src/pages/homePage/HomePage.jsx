import React, { Suspense, useContext } from "react";
import Hero from "../../Component/home/Hero";
import Book from "../../Component/home/Book";
import { BookContext } from './../../Component/context/Context';




const promise = async() => {
  const promisData = await fetch("/booksData.json").then((res) => res.json());
  return promisData
}


const HomePage = () => {
const myName = useContext(BookContext);
console.log("My name", myName);


  const jsonData = promise();
  return (
    <div>
      <Hero />
      <Suspense fallback='Lodding...'>
        <Book jsonData={jsonData}></Book>
      </Suspense>
    </div>
  );
};

export default HomePage;
