import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const HomeLayout = () => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <Header/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                <Outlet/>
            </main>
            <footer className="w-11/12 lg:w-10/12 mx-auto">
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;