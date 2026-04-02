import ReadBookList from "./ReadBookList";

const ReadBooksList = ({ readBookData }) => {
    console.log(readBookData);
    return (
        <div className="flex flex-col gap-5">
            {readBookData.map(book => <ReadBookList book={book} key={book.bookId}/>)}
        </div>
    );
};

export default ReadBooksList;