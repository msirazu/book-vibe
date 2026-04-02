const WishBookList = ({ book }) => {
    const {bookName, author, image, category, publisher, rating, tags, totalPages, yearOfPublishing} = book;
    return (
        <div className="flex flex-col md:flex-row gap-5 border border-gray-300 rounded-xl p-3">
            <div className="bg-three px-15 py-5 rounded-lg flex justify-center items-center">
                <img className="w-25 h-40 md:h-30" src={image} alt={bookName} />
            </div>
            <div className="w-full space-y-2">
                <h2 className="font-play font-bold text-2xl">{bookName}</h2>
                <h6>By: {author}</h6>
                <div className="flex gap-5 flex-wrap">
                    <div>Tag: {tags}</div>
                    <div>Year of Publishing: {yearOfPublishing}</div>
                </div>
                <div className="flex gap-5 flex-wrap">
                    <p>Publisher: {publisher}</p>
                    <p>Page: {totalPages}</p>
                </div>
                <hr className="w-full border-dashed border-gray-200"/>
                <div className="flex gap-5 items-center flex-wrap">
                    <p className="btn-three">Category: {category}</p>
                    <p className="btn-four">Rating: {rating}</p>
                    <button className="btn-five">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishBookList;