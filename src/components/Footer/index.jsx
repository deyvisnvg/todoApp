import { brand } from '../../assets/icons';

export default function Footer({children}) {
    return (
        <>
            <footer>
                <div className='flex justify-center'>
                    <div className='fixed bottom-[-30px] bg-bottonAdd shadow-gray-800 shadow-xl w-64 h-32 rounded-t-full'>
                        {children}
                        <div className='flex absolute top-12 left-16 gap-2'>
                            <img src={brand} alt="icon" />
                            <p className='text-lg'>Deyvisnvg</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}