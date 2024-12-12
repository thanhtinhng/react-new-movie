import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

const genres = [
  { name: 'Hành Động', id: 1 },
  { name: 'Phiêu Lưu', id: 2 },
  { name: 'Hoạt Hình', id: 3 },
  { name: 'Hài Hước', id: 4 },
  { name: 'Tình Cảm', id: 5 },
  { name: 'Viễn Tưởng', id: 6 },
  { name: 'Giả Tưởng', id: 7 },
  { name: 'Gia Đình', id: 8 },
  { name: 'Tâm Lý', id: 9 },
  { name: 'Bí Ẩn', id: 10 },
  { name: 'Khoa Học', id: 11 },
  { name: 'Thể Thao', id: 12 },
];

const headerNavigation = [
  {
    display: 'Trang Chủ',
    path: '/'
  },
  {
    display: 'Thể Loại',
    path: '/',
    hasDropdown: true
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
  const [showDropdown, setShowDropdown] = useState(false);

  const getActiveMenuIndex = (currentPath) => {
    return headerNavigation.findIndex(menuItem => menuItem.path === currentPath);
  };

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
              className={`${index === activeMenuIndex ? 'active' : ''} ${menuItem.hasDropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => menuItem.hasDropdown && setShowDropdown(true)}
              onMouseLeave={() => menuItem.hasDropdown && setShowDropdown(false)}
            >
              <Link to={menuItem.path}>
                {menuItem.display}
                {menuItem.hasDropdown && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              {menuItem.hasDropdown && showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {genres.map((genre) => (
                      <Link key={genre.id} to="/movie" className="dropdown-item">
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header