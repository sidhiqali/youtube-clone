import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItem from './LeftNavMenuItem';
import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';

function LeftNav() {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const handleClick = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectCategories(name);
        break;
      case 'home':
        return setSelectCategories(name);
        break;
      case 'menu':
        return false;
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto  scrollbar-hide h-full py-4 bg-black absolute md:relative z-10 transition-all ${
        mobileMenu ? 'translate-x-0' : 'translate-x-[-240px] md:translate-x-0'
      }`}
    >
      <div className='flex px-5 flex-col'>
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}
                action={() => {
                  handleClick(item.name, item.type);
                  navigate('/');
                }}
                className={`${
                  selectCategories === item.name ? 'bg-white/[0.15]' : ''
                }`}
              />
              {item.divider && <hr className='my-5 border-white/[0.2]' />}
            </React.Fragment>
          );
        })}
        <hr className='my-5 border-white/[0.2]' />
        <div className='text-white/[0.5] text-[12px]'>Clone by ALi</div>
      </div>
    </div>
  );
}

export default LeftNav;
