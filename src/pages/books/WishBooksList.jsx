import WishBookList from "./WishBookList";

const WishBooksList = ({ wishBookData }) => {
    return (
        <div>
            {wishBookData.map(book => <WishBookList book={book} key={book.bookId}/>)}
        </div>
    );
};

export default WishBooksList;