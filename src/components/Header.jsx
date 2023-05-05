import React, { useState, useContext } from 'react';
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import ytLogo from '../images/yt-logo.png';
import ytLogoMobile from '../images/yt-logo-mobile.png';

import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell, FiMenu } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
import { MdOutlineMic } from 'react-icons/md';
import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';
import { auth, provider } from '../Firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState('');
  const { setLoading, loading, mobileMenu, setMobileMenu } =
    useContext(Context);

  const navigate = useNavigate();
  const handleSearch = () => {
    searchQuery?.length > 0 && navigate(`/searchResult/${searchQuery}`);
  };
  const searchQueryHandler = (e) => {
    if (
      (e?.key === 'Enter' || e === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const mobileToggleMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setProfile(result?.user?.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    setLoading(true);
    signOut(auth);
    console.log(signOut);
    setProfile('');
    setLoading(false);
    navigate('/');
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split('/').filter(Boolean)?.[0];
  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader />}
      <div className='flex h-5 items-center'>
        {pageName !== 'video' && (
          <div
            className='flex md:hidden mr-2 md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]-[0.6]'
            onClick={mobileToggleMenu}
          >
            {mobileMenu ? (
              <CgCloseO className='text-white text-xl' />
            ) : (
              <FiMenu className='text-white text-xl' />
            )}
          </div>
        )}
        <Link className='flex h-5 items-center' to='/'>
          <img
            className='h-full hidden dark:md:block'
            src={ytLogo}
            alt='Youtube'
          />
          <img className='h-full md:hidden' src={ytLogoMobile} alt='Youtube' />
        </Link>
      </div>
      <div className='group flex items-center'>
        <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 w-24 md:w-full md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
          <div className='w-10  items-center justify-center hidden group-focus-within:md:flex'>
            <IoIosSearch className='text-white text-xl' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className='w-[30px] md:w-[50px] h-8 md:h-10  flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
          <IoIosSearch onClick={handleSearch} className='text-white text-xl' />
        </button>
        <div className='flex bg-[#121212] items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <MdOutlineMic  onClick={handleSignOut} className='text-white text-xl cursor-pointer' />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:flex items-center'>
          <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
            <RiVideoAddLine className='text-white text-xl cursor-pointer' />
          </div>
          <div className='flex items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
            <FiBell
             
              className='text-white text-xl cursor-pointer'
            />
          </div>
        </div>
        {profile ? (
          <div className='flex justify-center h-7 w-7 overflow-hidden rounded-full md:ml-4 '>
            <img src={profile} alt='' />
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className='bg-transparent hover:bg-blue-500 w-11 md:w-full text-xs text-blue-700 font-semibold hover:text-white py-1 md:px-4 border border-blue-500 hover:border-transparent rounded-full'
          >
            SignIn
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
