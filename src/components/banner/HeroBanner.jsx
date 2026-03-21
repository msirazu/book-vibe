import bookImg from '../../assets/images/hero-book.png'; 

const HeroBanner = () => {
    return (
        <div>
            <section className='flex flex-col-reverse md:flex-row justify-around items-center bg-three py-10 px-10 gap-10'>
            <div className='space-y-5'>
                <h3 className='font-bold text-4xl font-play max-w-100'>Books to freshen up your bookshelf</h3>
                <button className="btn btn-one">View The List</button>
            </div>
            <div>
                <img className='w-50' src={bookImg}/>
            </div>
            </section>
        </div>
    );
};

export default HeroBanner;