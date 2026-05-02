import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Component/context/Context";

const DetailsPage = () => {
  const { handlerClick, handlerWishList } = useContext(BookContext);

  const { bookId } = useParams();
  const allBooks = useLoaderData();
  const bookData = allBooks.find((item) => item.bookId === Number(bookId));

  if (!bookData)
    return (
      <h2 className="text-center text-4xl font-bold my-20 text-red-500">
        Book Not Found
      </h2>
    );

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    tags,
    yearOfPublishing,
  } = bookData;

  return (
    <div className="container mx-auto px-4 lg:px-0 my-10 font-sans">
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        {/* বাম পাশ: ইমেজ সেকশন (Clean Background) */}
        <div className="flex-1 bg-gray-100 rounded-3xl p-10 lg:p-20 flex justify-center items-center shadow-inner">
          <img
            src={image}
            alt={bookName}
            className="h-full max-h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ডান পাশ: কন্টেন্ট সেকশন */}
        <div className="flex-1 flex flex-col justify-center">
          {/* শিরোনাম ও লেখক */}
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              {bookName}
            </h1>
            <p className="text-xl font-medium text-gray-600">By: {author}</p>
            <hr className="my-4 border-gray-200" />
            <p className="text-xl font-semibold text-gray-700">{category}</p>
            <hr className="my-4 border-gray-200" />
          </div>

          {/* রিভিউ সেকশন */}
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed text-justify">
              <span className="font-bold text-black text-lg">Review: </span>
              {review}
            </p>
          </div>

          {/* ট্যাগস */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-bold text-lg">Tag:</span>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="mb-6 border-gray-200" />

          {/* টেবিল স্টাইল ইনভেন্টরি */}
          <div className="space-y-3">
            <div className="flex gap-16">
              <p className="text-gray-500 w-40">Number of Pages:</p>
              <p className="font-bold text-gray-800">{totalPages}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-gray-500 w-40">Publisher:</p>
              <p className="font-bold text-gray-800">{publisher}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-gray-500 w-40">Year of Publishing:</p>
              <p className="font-bold text-gray-800">{yearOfPublishing}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-gray-500 w-40">Rating:</p>
              <p className="font-bold text-gray-800">{rating}</p>
            </div>
          </div>

          {/* অ্যাকশন বাটনস */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => handlerClick(bookData)}
              className="px-8 py-3 border-2 border-gray-300 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Read
            </button>
            <button
              onClick={() => handlerWishList(bookData)}
              className="px-8 py-3 bg-[#50B1C9] text-white border-2 border-[#50B1C9] rounded-xl font-bold hover:bg-transparent hover:text-[#50B1C9] transition-all duration-300"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
