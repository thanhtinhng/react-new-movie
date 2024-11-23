import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumb.scss'

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="container__breadcrumb">
      <Link to="/"><i className="fa-solid fa-house"></i> Trang Chủ</Link>
      {pathnames.map((value, index) => {

        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={to}>
            <p className='arror'> &gt; </p>
            {index === pathnames.length - 1 ? (
              <p>{decodeURIComponent(value)}</p>
            ) : (
              <Link to={to}>{decodeURIComponent(value)}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
