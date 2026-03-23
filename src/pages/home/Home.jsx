import { Suspense } from "react";
import HeroBanner from "../../components/banner/HeroBanner";
import HomeBooksList from "../books/HomeBooksList";
import LoadingColors from "../../components/loading/LoadingColors";
import { Helmet } from "react-helmet-async";

const fetchBookPromise = fetch('/data/booksData.json').then(res => res.json());

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | Book Vibe</title>
            <meta name='description' content='book vibe homepage'/>
        </Helmet>
        <div>
            <section id="hero-section">
                <HeroBanner/>
            </section>

            <section id="books-section" className="my-5 space-y-5">
                <h3 className="font-bold text-center text-2xl font-play">Books</h3>
                <Suspense fallback={<LoadingColors/>}>
                    <HomeBooksList fetchBookPromise={fetchBookPromise}/>
                </Suspense>
            </section>
        </div>
        </>
    );
};

export default Home;