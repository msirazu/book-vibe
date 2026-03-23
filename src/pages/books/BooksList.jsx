import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sortType } from '../../utilities/sortBy';

const BooksList = () => { 
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

      </section>
    </TabPanel>
    <TabPanel>
      <section id='wish-book'>

      </section>
    </TabPanel>
  </Tabs>
        </section>
        </>
    );
};

export default BooksList;