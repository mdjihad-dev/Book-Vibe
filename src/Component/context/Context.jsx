import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const Context = ({children}) => {
      const [storedBook, setStoreBook] = useState([]);
      const [wishList, setWishList] = useState([]);

     const  handlerClick = (bookData) => {
        console.log(bookData, storedBook);
        const isAxist = storedBook.find(
          (book) => book.bookId === bookData.bookId,
        );

        if (isAxist) {
          toast.error("This book is already in Read List!");
        } else {
          setStoreBook([...storedBook, bookData]);
          toast.success(`${bookData.bookName} added to Read List!`);
        }
      };
      
     const  handlerWishList = (bookData) => {

        const stordToRedlish = storedBook.find(book => book.bookId === bookData.bookId);
        if(stordToRedlish){
            toast.error("You have already read this book!");
            return
        }
    
        const isAxist = wishList.find(
          (book) => book.bookId === bookData.bookId,
        );

        if (isAxist) {
          toast.error("This book is already added Readlist");
        } else {
          setWishList([...wishList, bookData]);
          toast.success(`${bookData.bookName} is added successfull added`);
        }
      };

    const name = {
      storedBook,
      setStoreBook,
      handlerClick,
      wishList,
      handlerWishList,
    };
    return (
        <BookContext.Provider value={name}>
            {children}
        </BookContext.Provider>
    );
};

export default Context;