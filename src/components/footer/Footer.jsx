import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo.svg';
import youtube from '../../assets/youtube.png';
import ins from '../../assets/ins.png';
import facebook from '../../assets/facebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content__col-1 footer__content__col">
            <div className="logo-footer">
              <img src={logo} alt="Logo NewMovies" />
              <Link to="/">NewMovies</Link>
            </div>
            <p>
              Newmovies.net là một trang web xem phim trực tuyến miễn phí, hoàn toàn không có quảng cáo. Chúng tôi mang đến cho bạn trải nghiệm xem phim với hơn 10.000 tựa phim mà không cần phải đăng ký hay trả phí. Ngoài ra, bạn cũng có thể tải xuống phim đầy đủ từ Newmovies.net để xem lại bất cứ khi nào bạn muốn.
              <br /><br />
            </p>
          </div>
          <div className="footer__content__col">
            <div className="footer__content__col__item-container">
              <Link to="/" className="footer__content__col__item-container__item">Trang chủ</Link>
              <Link to="/contact" className="footer__content__col__item-container__item">Liên hệ</Link>
              <Link to="/terms" className="footer__content__col__item-container__item">Điều khoản dịch vụ</Link>
              <Link to="/about" className="footer__content__col__item-container__item">Giới thiệu</Link>
            </div>
          </div>
          <div className="footer__content__col">
            <div className="footer__content__col__item-container">
              <Link to="/faq" className="footer__content__col__item-container__item">FAQ</Link>
              <Link to="/upgrade" className="footer__content__col__item-container__item">Nâng cấp tài khoản</Link>
              <Link to="/privacy" className="footer__content__col__item-container__item">Chính sách bảo mật</Link>
            </div>
          </div>
          <div className="footer__content__col footer__content__col-4">
            <div className="footer__content__col__item-container">
              <Link to="/recommended" className="footer__content__col__item-container__item">Nên xem</Link>
              <Link to="/new" className="footer__content__col__item-container__item">Mới ra mắt</Link>
              <Link to="/ranking" className="footer__content__col__item-container__item">Bảng xếp hạng</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright NewMovies.net</p>
          <div>
            <img src={youtube} alt="YouTube" className="img-link" />
            <a href="https://www.facebook.com/thanhtinh.nguyen.5439087/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="img-link" />
            </a>
            <img src={ins} alt="Instagram" className="img-link" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
