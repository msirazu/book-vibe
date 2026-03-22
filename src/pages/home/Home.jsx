import { Suspense } from "react";
import HeroBanner from "../../components/banner/HeroBanner";
import HomeBooksList from "../books/HomeBooksList";
import LoadingColors from "../../components/loading/LoadingColors";

const fetchBookPromise = fetch('/data/booksData.json').then(res => res.json());

const Home = () => {
    return (
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
    );
};

export default Home;