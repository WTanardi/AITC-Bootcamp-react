import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between mx-auto p-[30px] font-serif'>
                <Link to='/'>
                    <h1 className='text-4xl md:text-7xl font-bold'>Data <br></br> Mahasiswa</h1>
                </Link>
                <Link to='/form'>
                    <p className='flex-end'><u>Tambah +</u></p>
                </Link>
            </div>
            <hr className='border-1 border-black w-[95%] mb-7 mx-auto'/>
        </header>
    )
}

export default Header