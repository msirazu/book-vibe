import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Not Found | Book Vibe</title>
            <meta name='description' content='not found page'/>
        </Helmet>
        <div className="flex justify-center items-center h-screen capitalize">
            ops page not found
        </div>
        </>
    );
};

export default NotFound;