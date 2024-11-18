import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/tmovie.png'

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
  }
]

const Header = () => {

  const { pathname } = useLocation();

  const isActive = headerNavigation.findIndex(nav => nav.path === pathname);

  return (
    <div className="header">
      <div className="header__wrap">

        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to='/'>NewMovies</Link>
        </div>

        <ul className="header__navigation">
          {headerNavigation.map((nav, i) => {
            return (
              <li key={i} className={`${i === isActive ? 'active' : ''}`}>
                <Link to={nav.path}>
                  {nav.display}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header