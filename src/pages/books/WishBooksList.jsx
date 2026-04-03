import WishBookList from "./WishBookList";

const WishBooksList = ({ wishData, handleWishDelete }) => {
    console.log(wishData);
    return (
        <div>
            {wishData.map(book => <WishBookList book={book} key={book.bookId} handleWishDelete={handleWishDelete}/>)}
        </div>
    );
};

export default WishBooksList;