import { Link } from 'react-router-dom';

const Header_xx = () => {
  return (
    <>
      <header className='bg-slate-100 border-b border-primary-900 px-8 py-5'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
          <Link className='flex items-center gap-4 z-10' to='/'>
            <img width='60' height='60' src='/logo.webp' />
            <span>The Wild Oasis (htc, 123456789)</span>
          </Link>
          <nav className='z-10 text-xl'>
            <ul className='flex gap-8 items-center'>
              <li>
                <Link
                  className='text-slate-500 p-3 hover:bg-slate-200 transition-colors'
                  to='/'
                >
                  Home_xx
                </Link>
              </li>
              <li>
                <Link
                  className='text-slate-500 p-3 hover:bg-slate-200 transition-colors'
                  to='/cabins_xx'
                >
                  Cabins_xx
                </Link>
              </li>
              <li>
                <Link
                  className='text-slate-500 p-3 hover:bg-slate-200 transition-colors'
                  to='/About_24'
                >
                  About_24
                </Link>
              </li>
              <li>
                <Link
                  className='text-slate-500 p-3 hover:bg-slate-200 transition-colors'
                  to='/contact_xx'
                >
                  Contact_xx
                </Link>
              </li>
              <li>
                <Link
                  className='text-slate-500 p-3 hover:bg-slate-200 transition-colors'
                  to='/login_xx'
                >
                  Login_xx
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header_xx;
