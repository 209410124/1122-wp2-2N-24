import {Outlet} from 'react-router-dom';
import Navbar_24 from '../components/Navbar_24';

const HomeLayout_24 = props => {
  return (
    <>
   
    <Navbar_24/>
    <Outlet/>
    </>
  );
};



export default HomeLayout_24