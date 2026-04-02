import { Suspense } from "react";
import HomeBooksList from "../books/HomeBooksList";
import { Helmet } from "react-helmet-async";
import HeroBanner from "../../components/common/banner/HeroBanner";
import LoadingColors from "../../components/ui/loading/LoadingColors";

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