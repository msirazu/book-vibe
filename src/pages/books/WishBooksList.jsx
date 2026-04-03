import WishBookList from "./WishBookList";

const WishBooksList = ({ wishData, handleWishDelete }) => {
    return (
        <div className="flex flex-col gap-5">
            {wishData.map(book => <WishBookList book={book} key={book.bookId} handleWishDelete={handleWishDelete}/>)}
        </div>
    );
};

export default WishBooksList;