import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
        <Helmet>
            <title>Register | Book Vibe</title>
            <meta name='description' content='register page'/>
        </Helmet>
        <div className="flex justify-center items-center h-screen">
            <section className="space-y-5">
            <div>
            <h1 className="capitalize">
            register page coming soon
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

export default Register;