import React, { use } from 'react';
import BookCard from '../ui/bookCard/BookCard';

const Books = ({jsonData}) => {
    const useData = use(jsonData)
    return (
      <div>
        <h2 className="text-center text-2xl font-bold">Books</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {useData.map((data) => (
            <BookCard key={data.bookId} data={data}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default Books;