import ReadBookList from "./ReadBookList";

const ReadBooksList = ({ readData, handleReadDelete }) => {
    return (
        <div className="flex flex-col gap-5">
            {readData.map(book => <ReadBookList book={book} key={book.bookId} handleReadDelete={handleReadDelete}/>)}
        </div>
    );
};

export default ReadBooksList;