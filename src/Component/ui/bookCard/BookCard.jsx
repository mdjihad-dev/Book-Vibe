
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ data }) => {
    
  return (
    <Link to={`/books/${data.bookId}`} className="card bg-base-100 w-96 shadow-lg">
      <figure className="p-8">
        <img src={data.image} alt="Shoes" className="object-cover h-60" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          {data.tags.map((tag, index) => (
            <div key={index} className="flex justify-between">
              <h3 className="badge text-green-500 text-lg font-semibold">
                {tag}
              </h3>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-[#131313]">{data.bookName}</h2>
        <h3 className="text-lg font-semibold text-[#131313]">
          By: {data.author}
        </h3>
        <div className="card-actions justify-between">
          <div className="text-base font-semibold text-[#131313]">
            {data.category}
          </div>
          <div className="flex gap-2 items-center text-base font-semibold text-[#131313]">
            {data.rating} <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;