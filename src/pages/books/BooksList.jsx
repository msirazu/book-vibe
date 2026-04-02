import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ChevronDown } from 'lucide-react';
import { sortType } from '../../utils/sortBy';
import { getReadFromLocalStorage, getWishFromLocalStorage } from '../../utils/localStorage';
import { useContext } from 'react';
import DataContext from '../../features/auth/context/DataContext';
import ReadBooksList from './ReadBooksList';
import WishBooksList from './WishBooksList';

const BooksList = () => {
  const storedReadData = getReadFromLocalStorage();
  const books = useContext(DataContext);
  const readBookData = books.filter(b => storedReadData.includes(b.bookId));

  const storedWishData = getWishFromLocalStorage();
  const wishBookData = books.filter(b => storedWishData.includes(b.bookId));
    return (
        <>
        <Helmet>
        <title>Books List | Book Vibe</title>
        <meta name='description' content='books list page'/>
        </Helmet>
        <section>
            <div className='p-5 my-5 bg-gray-100 flex justify-center rounded-xl'>
                <h1 className='font-bold text-xl'>Books</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 btn-one">Sort By <ChevronDown/></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={() => sortType('rating')}>Rating</button></li>
    <li><button onClick={() => sortType('page')}>Number of Pages</button></li>
    <li><button onClick={() => sortType('year')}>Publisher of Year</button></li>
  </ul>
</div>
            </div>
        </section>
        <section className='my-5'>
        <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <section id='read-book'>
        <ReadBooksList readBookData={readBookData}/>
      </section>
    </TabPanel>
    <TabPanel>
      <section id='wish-book'>
        <WishBooksList wishBookData={wishBookData}/>
      </section>
    </TabPanel>
  </Tabs>
        </section>
        </>
    );
};

export default BooksList;