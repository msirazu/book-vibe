import { useContext } from "react";
import DataContext from "../../auth/context/DataContext";
import { useParams } from "react-router-dom";

const HomeBookDetails = () => {
    const books = useContext(DataContext);
    const { bookId } = useParams();
    const book = books.find(b => b.bookId === Number(bookId));
    const {bookName, author, image, category, publisher, rating, review, tags, totalPages, yearOfPublishing} = book;
    return (
        <div>
            <section className="flex flex-col justify-between my-5 gap-10 lg:flex-row">
                <div id="book-image-container" className="flex-1">
                    <div className="bg-three flex justify-center items-center py-20 rounded-xl">
                <img className="max-w-50" src={image} alt={bookName}/>
                    </div>
                </div>
                <div id="book-info-container" className="flex-1 font-work space-y-2">
                    <h1 className="font-bold text-2xl font-play">{bookName}</h1>
                    <h4>By: {author}</h4>
                    <hr className="border-dashed border-gray-300"/>
                    <h5>{category}</h5>
                    <hr className="border-dashed border-gray-300"/>
                    <p className="text-sm text-text"><span className="text-black font-bold">Review:</span> {review}</p>
                    <div>
                    <p className="flex gap-5"><span className="font-bold">Tag: </span>{tags.map(tag => <span className="text-one">#{tag}</span>
                    )}
                    </p>
                    
                    </div>
                    <hr className="border-dashed border-gray-300"/>
                    <div className="grid grid-cols-2 space-y-2">
                    <p className="text-text text-sm">Number of Pages:</p>
                    <p className="font-bold">{totalPages}</p>
                    <h6 className="text-text text-sm">Publisher:</h6>
                    <h6 className="font-bold">{publisher}</h6>
                    <p className="text-text text-sm">Year of Publishing:</p>
                    <p className="font-bold">{yearOfPublishing}</p>
                    <p className="text-text text-sm">Rating:</p>
                    <p className="font-bold">{rating}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBookDetails;