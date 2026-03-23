import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ChevronDown } from 'lucide-react';

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
                <button className='btn btn-one flex items-center'>Sort By <ChevronDown/></button>
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