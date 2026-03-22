import { use } from "react";
import HomeBookList from "./HomeBookList";

const HomeBooksList = ({ fetchBookPromise }) => {
    const books = use(fetchBookPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map(book => <HomeBookList key={book.bookId} book={book}/>
            )}
        </div>
    );
};

export default HomeBooksList;