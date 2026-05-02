
import Books from "../../Component/books/Books";
import { useContext } from 'react';
import Context from './../context/Context';


const SelectedBook = () => {

  const playerName = useContext(Context)
  console.log(playerName);
  
  return (
    <div className="container mx-auto p-4">
      <div className="bg-green-50 p-6 rounded-2xl mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-green-800">
          Explore Our Library
        </h2>
        <div className="badge badge-lg p-6 bg-green-600 text-white border-none gap-2">
          Total Read Books:{" "}
          <span className="font-extrabold"></span>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
