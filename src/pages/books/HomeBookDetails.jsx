import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import DataContext from "../../features/auth/context/DataContext";
import { saveReadDataToLocalStorage, saveWishDataToLocalStorage } from "../../utils/localStorage";

const HomeBookDetails = () => {
    const books = useContext(DataContext);
    const { bookId } = useParams();
    const book = books.find(b => b.bookId === Number(bookId));
    const {bookName, author, image, category, publisher, rating, review, tags, totalPages, yearOfPublishing} = book;
    
    const handleRead = (id) => {
        const isAdded = saveReadDataToLocalStorage(id);
        if (isAdded) {
            toast.success('Book Added to Read List Successfully')
        } else {
            toast.error('Book Already Exists in Read List')
        }
    }

    const handleWish = (id) => {
        const isAdded = saveWishDataToLocalStorage(id);
         if (isAdded) {
            toast.success('Book Added to Wish List Successfully')
        } else {
            toast.error('Book Already Exists in Wish List')
        }
    }

    return (
        <>
        <Helmet>
            <title>{`${bookName} | Book Vibe`}</title>
            <meta name='description' content={`${bookName} book full details`}/>
        </Helmet>
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
                    <p className="flex gap-5"><span className="font-bold">Tag: </span>{tags.map((tag, index) => <span key={index} className="text-one">#{tag}</span>
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
                    <div className="flex gap-5">
                        <button onClick={() => handleRead(bookId)} className="btn">Read</button>
                        <button onClick={() => handleWish(bookId)}  className="btn btn-two text-white">Wishlist</button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default HomeBookDetails;