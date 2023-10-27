import { book_title, arrow, home } from '../../assets/icons';

export default function LogoSection() {
    return (
        <>
            <div className='mb-10 text-xs'>
                <img src={home} alt="" className='w-7 text-blue-700' />
            </div>

            <div className='flex justify-evenly items-center px-8 py-4 bg-blue-400 rounded-xl h-36'>
                <h1 className='text-3xl text-white'>Manage your time well</h1>
                <img src={arrow} alt="" className='w-20' />
                <img src={book_title} alt="" className='w-20' />
            </div>
        </>
    );
}