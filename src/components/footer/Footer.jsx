import React from 'react'
import './Footer.scss'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'
import youtube from '../../assets/youtube.png'
import ins from '../../assets/ins.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      {/* <div className="footer" style={{ backgroundImage: `url(${bg})` }}> */}
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content__col-1 footer__content__col">
            <div className="logo-footer">
              <img src={logo} />
              <Link to='/'>NewMovies</Link>
            </div>
            <p>
              Cineb.net là một trang web xem phim trực tuyến miễn phí, hoàn toàn không có quảng cáo. Chúng tôi mang đến cho bạn trải nghiệm xem phim và TV-series với hơn 10.000 tựa phim mà không cần phải đăng ký hay trả phí. Ngoài ra, bạn cũng có thể tải xuống phim đầy đủ từ Cineb.net để xem lại bất cứ khi nào bạn muốn.
              <br /><br />
            </p>
          </div>
          <div className="footer__content__col">
            <div className="footer__content__col__item-container">
              <a className="footer__content__col__item-container__item">Trang chủ</a>
              <a className="footer__content__col__item-container__item">Liên hệ</a>
              <a className="footer__content__col__item-container__item">Điều khoản dịch vụ</a>
              <a className="footer__content__col__item-container__item">Giới thiệu</a>
            </div>
          </div>
          <div className="footer__content__col">
            <div className="footer__content__col__item-container">
              <a className="footer__content__col__item-container__item">FAQ</a>
              <a className="footer__content__col__item-container__item">Nâng cấp tài khoản</a>
              <a className="footer__content__col__item-container__item">Chính sách bảo mật</a>
            </div>
          </div>
          <div className="footer__content__col footer__content__col-4">
            <div className="footer__content__col__item-container">
              <a className="footer__content__col__item-container__item">Nên xem</a>
              <a className="footer__content__col__item-container__item">Mới ra mắt</a>
              <a className="footer__content__col__item-container__item">Bảng xếp hạng</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright NewMovies.net</p>
          <div>
            <img src={youtube} alt="" className="img-link" />
            <img src={facebook} alt="" className="img-link" />
            <img src={ins} alt="" className="img-link" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer