import { useState ,useRef} from 'react';
import Wrapper from '../assets/wrappers/Navbar_24'
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
const Navbar_24 =() => {
  
  const [ isMobileMenuHidden,setIsMobileMenuHidden] =useState(true);
  const mobileBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleMobileBtn =()=>{
    mobileMenuRef.current.classList.toggle('hidden');
    setIsMobileMenuHidden(!isMobileMenuHidden);
  }
  return (
   
    <Wrapper> 
        <header className="header">
    <div className="header-row container" role="navigation" aria-label="Main">
      <div className="header-left">
        <div className="logo">
          <h1>logo</h1>
        </div>
      </div>
      <div className="header-right">
        <ul className="main-menu">
          <li className="menu-item"><Link to="#" className="active">Home</Link></li>

          <li className="menu-item mega-menu">
            <Link to="#">Mega menu +</Link>
            <div className="mega-menu-wrapper slideInUp">
              <div className="mega-menu-col">
                <h5>Menu block 1</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 2</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 3</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 4</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="menu-item dropdown">
            <Link to="#">Blog +</Link>
            <div className="sub-menu-wrapper slideInUp">
              <ul className="sub-menu">
                <li className="menu-item"><Link to='./demoGetBlog_24'>demo : SupaGetBlog_24</Link></li>
                <li className="menu-item"><Link to='./midBlog_24'>mid1</Link></li>
                <li className="menu-item"><Link to='./mid2Blog'>mid2</Link></li>
               
              </ul>
            </div>
          </li>
          <li className="menu-item"><Link to="#">Blog</Link></li>
          <li className="menu-item"><Link to="#">Contact</Link></li>
        </ul>
        <Link to="#"
          id="hamburger-icon"
          className="mobile-toggler"
          aria-label="Mobile Menu"
          ref={mobileBtnRef}
          onClick={handleMobileBtn}
          >
            {''}
            {isMobileMenuHidden ? (
            <FaBars size={16}/>):
            (<FaXmark size={16}/>)}
        </Link>
      </div>


      <div id="mobile-menu" className="mobile-menu hidden slideInDown" ref={mobileMenuRef}>
        <ul>
          <li className="menu-item"><Link to="#" className="active">Home</Link></li>

          <li className="menu-item mega-menu">
            <Link to="#">Mega menu +</Link>
            <div className="mega-menu-wrapper">
              <div className="mega-menu-col">
                <h5>Menu block 1</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 2</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 3</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
              <div className="mega-menu-col">
                <h5>Menu block 4</h5>
                <ul className="mega-sub-menu">
                  <li><Link to="#">Menu block item 1</Link></li>
                  <li><Link to="#">Menu block item 2</Link></li>
                  <li><Link to="#">Menu block item 3</Link></li>
                  <li><Link to="#">Menu block item 4</Link></li>
                  <li><Link to="#">Menu block item 5</Link></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="menu-item dropdown">
            <Link to="#">Blog +</Link>
            <div className="sub-menu-wrapper">
              <ul className="sub-menu">
              <li className="menu-item"><Link to='./demoGetBlog_24'>demo : SupaGetBlog_24</Link></li>
                <li className="menu-item"><Link to="#">md1</Link></li>
                <li className="menu-item"><Link to="#">md2Blog</Link></li>
                <li className="menu-item"><Link to="#">md2Supa</Link></li>
              </ul>
            </div>
          </li>
          <li className="menu-item"><Link to="#">Blog</Link></li>
          <li className="menu-item"><Link to="#">Contact</Link></li>
        </ul>
      </div>
    </div>
  </header>
</Wrapper>

  );
};

export default Navbar_24;