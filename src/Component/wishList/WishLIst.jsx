import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/Context';
import BookCard from '../ui/bookCard/BookCard';

const WishLIst = ({ shorTing }) => {
  const { wishList } = useContext(BookContext);

  const [short, setShort] = useState(wishList);

  useEffect(() => {
    if (shorTing) {
      if (shorTing === "pages") {
        const shortData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setShort(shortData);
      } else if (shorTing === "rating") {
        const ratingData = [...wishList].sort((a, b) => a.rating - b.rating);
        setShort(ratingData);
      }
    }
  }, [wishList, shorTing]);

  if (short.length === 0) {
    return (
      <div className="w-full flex bg-gray-300 justify-center items-center min-h-[400px]">
        <h2 className="text-3xl font-bold  uppercase tracking-widest">
          Empty wish List
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
      {short.map((data) => (
        <BookCard data={data} />
      ))}
    </div>
  );
};

export default WishLIst;