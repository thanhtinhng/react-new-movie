import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

const headerNavigation = [
  {
    display: 'Trang Chủ',
    path: '/'
  },

  {
    display: 'Phim Lẻ',
    path: '/movie'
  },

  {
    display: 'Phim Bộ',
    path: '/tv'
  },

  {
    display: 'Yêu Thích',
    path: '/favourite'
  },

  {
    display: (
      <>
        Tìm Kiếm&nbsp; <i className="fa-solid fa-magnifying-glass"></i>
      </>
    ),
    path: '/search'
  },

  {
    display: (
      <>
        Tài Khoản&nbsp; <i class="fa-solid fa-user"></i>
      </>
    ),
    path: '/account'
  }
]

const Header = () => {
  const { pathname } = useLocation();

  // Kiểm tra xem menu item nào đang active dựa vào current path
  const getActiveMenuIndex = (currentPath) => {
    return headerNavigation.findIndex(menuItem => menuItem.path === currentPath);
  };

  // Lấy index của menu item đang active
  const activeMenuIndex = getActiveMenuIndex(pathname);

  return (
    <div className="header">
      <div className="header__wrap">
        <div className="logo">
          <img src={logo} alt="logo" id="logo" />
          <Link to='/'>NewMovies</Link>
        </div>

        <ul className="header__navigation">
          {headerNavigation.map((menuItem, index) => (
            <li 
              key={index} 
              className={index === activeMenuIndex ? 'active' : ''}
            >
              <Link to={menuItem.path}>
                {menuItem.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header