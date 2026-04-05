import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ChevronDown } from 'lucide-react';
import { getReadFromLocalStorage, getWishFromLocalStorage, removeReadDataFromLocalStorage, removeWishDataFromLocalStorage } from '../../utils/localStorage';
import { useEffect, useState } from 'react';
import ReadBooksList from './ReadBooksList';
import WishBooksList from './WishBooksList';
import { toast } from 'react-toastify';
import { sortBooks } from '../../utils/sortBy';

const BooksList = () => {
  const [readData, setReadData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [activeTab, setActiveTab] = useState('read');

  useEffect(() => {
    const readPromise = () => {
      const storedReadData = getReadFromLocalStorage();
      setReadData(storedReadData);
    }
    readPromise();

    const wishPromise = () => {
      const storedWishData = getWishFromLocalStorage();
      setWishData(storedWishData);
    }
    wishPromise();
  }, []);

  const handleReadDelete = (id) => {
        const filterRead = readData.filter(book => book.bookId !== id.bookId);
        const isDel = removeReadDataFromLocalStorage(filterRead);
        if (isDel) {
          toast.success(`${id.bookName} Removed from Read List`)
        }
        setReadData(filterRead);
    }

  const handleWishDelete = (id) => {
       const filterWish = wishData.filter(book => book.bookId !== id.bookId);
        const isDel = removeWishDataFromLocalStorage(filterWish);
        if (isDel) {
          toast.success(`${id.bookName} Removed from Wish List`)
        }
        setWishData(filterWish);
    }  

  const handleSort = (type) => {
    if (activeTab === 'read') {
      setReadData(sortBooks(readData, type));
    }
    if (activeTab === 'wish') {
      setWishData(sortBooks(readData, type));
    }
  }

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
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 p-2 shadow-sm">
    <li><button onClick={() => handleSort('rating-low')}>Rating: Low to High</button></li>
    <li><button onClick={() => handleSort('rating-high')}>Rating: High to Low</button></li>
    <li><button onClick={() => handleSort('page-low')}>Number of Pages: Low to High</button></li>
    <li><button onClick={() => handleSort('page-high')}>Number of Pages: High to Low</button></li>
    <li><button onClick={() => handleSort('year-low')}>Publisher of Year: Low to High</button></li>
    <li><button onClick={() => handleSort('year-high')}>Publisher of Year: High to Low</button></li>
  </ul>
</div>
            </div>
        </section>
        <section className='my-5'>
        <Tabs>
    <TabList>
      <Tab onClick={() => setActiveTab('read')}>Read Books</Tab>
      <Tab onClick={() => setActiveTab('wish')}>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <section id='read-book'>
        <ReadBooksList readData={readData} handleReadDelete={handleReadDelete}/>
      </section>
    </TabPanel>
    <TabPanel>
      <section id='wish-book'>
        <WishBooksList wishData={wishData} handleWishDelete={handleWishDelete}/>
      </section>
    </TabPanel>
  </Tabs>
        </section>
        </>
    );
};

export default BooksList;