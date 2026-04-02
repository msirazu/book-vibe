import { Link } from "react-router-dom";

const HomeBookList = ({ book }) => {
    const {bookName, author, image, category, rating, tags, bookId} = book;
    return (
        <>
        <Link to={`/book-details/${bookId}`}>
        <div className="border border-gray-300 p-5 rounded-xl">
            <section className="w-full space-y-3">
                <div className="bg-four flex justify-center p-5">
            <img className="max-h-30" src={image}/>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        {tags.map((tag, index) => <p className="tag-one py-1 px-5 font-work" key={index}>{tag}</p>)}
                    </div>
                    <h2 className="font-bold font-play text-2xl">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr className="border-dashed border-gray-300"/>
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </section>
        </div>
        </Link>
        </>
    );
};

export default HomeBookList;