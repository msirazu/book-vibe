import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoutes from './PrivateRoutes';
import HomeBookDetails from '../pages/books/HomeBookDetails';
import BooksList from '../pages/books/BooksList';
import DashboardHome from '../features/dashboard/DashboardHome';
import Register from '../features/auth/register/Register';
import Login from '../features/auth/login/Login';

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {path: '', element: <Home/>},
        {path: '*', element: <NotFound/>},
        {path: 'book-details/:bookId', element: <HomeBookDetails/>},
        {path: 'books', element: <BooksList/>}
    ]},
    {path: 'dashboard', element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>, children: [
        {path: '', element: <DashboardHome/>}
    ]},
    {path: 'auth', element: <AuthLayout/>, children: [
        {path: 'login', element: <Login/>},
        {path: 'register', element: <Register/>}
    ]},
]);

export default router;