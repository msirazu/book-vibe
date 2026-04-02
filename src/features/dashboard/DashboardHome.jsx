import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    return (
        <>
        <Helmet>
            <title>Dashboard | Book Vibe</title>
            <meta name='description' content='dashboard page'/>
        </Helmet>
        <div className="flex justify-center items-center h-screen">
            <section className="space-y-5">
            <div>
            <h1 className="capitalize">
            dashboard page coming soon
            </h1>
            </div>
            <div className="flex gap-5">
                <Link to='/'>
                <button className="btn">Home</button>
                </Link>
                <Link to='/dashboard'>
                <button className="btn">Dashboard</button>
                </Link>
                </div>
            </section>
        </div>
        </>
    );
};

export default DashboardHome;