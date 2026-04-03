import { Helmet } from "react-helmet-async";

const BookNotFound = () => {
    return (
        <>
            <Helmet>
                <title>Book Not Found | Book Vibe</title>
                <meta name='description' content='book not found' />
            </Helmet>
            <div className="flex justify-center items-center h-screen capitalize">
                ops book not found
            </div>
        </>
    );
};

export default BookNotFound;