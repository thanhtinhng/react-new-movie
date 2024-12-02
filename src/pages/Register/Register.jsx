import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'
import googleLogo from '../../assets/google-logo.png'
import facebookLogo from '../../assets/Facebook_Logo.png'

const Register = () => {
  const navigate = useNavigate();

  const genres = [
    'Hành động', 'Kinh dị', 'Hài', 'Lãng mạn', 
    'Hoạt hình', 'Khoa học viễn tưởng', 'Tâm lý', 'Tài liệu'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Nhập lại mật khẩu không khớp!');
      return;
    }
    
    alert('Đăng ký thành công!');
    navigate('/login');
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h2 className="register__form__title">Đăng Ký Tài Khoản</h2>
        
        <div className="register__form__section">
          <h3 className="register__form__section__title">Thông Tin Cơ Bản</h3>
          
          <div className="register__form__group">
            <label className="register__form__label">Tên đăng nhập *</label>
            <input
              className="register__form__input"
              type="text"
              name="username"
              required
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Mật khẩu *</label>
            <input
              className="register__form__input"
              type="password"
              name="password"
              required
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Nhập lại mật khẩu *</label>
            <input
              className="register__form__input"
              type="password"
              name="confirmPassword"
              required
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Email *</label>
            <input
              className="register__form__input"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Họ và tên *</label>
            <input
              className="register__form__input"
              type="text"
              name="fullName"
              required
            />
          </div>
        </div>

        <div className="register__form__section">
          <h3 className="register__form__section__title">Thông Tin Thêm</h3>
          
          <div className="register__form__group">
            <label className="register__form__label">Ngày sinh</label>
            <input
              className="register__form__input"
              type="date"
              name="dateOfBirth"
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Giới tính</label>
            <select className="register__form__select" name="gender">
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Số điện thoại</label>
            <input
              className="register__form__input"
              type="tel"
              name="phone"
            />
          </div>

          <div className="register__form__group">
            <label className="register__form__label">Thể loại yêu thích</label>
            <div className="register__form__genres">
              {genres.map(genre => (
                <label key={genre} className="register__form__genres__item">
                  <input
                    className="register__form__genres__checkbox"
                    type="checkbox"
                    name="genres"
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="register__form__submit">Đăng Ký</button>

        <p className="register__form__login-link">
          Đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
        </p>

        <div className="register__form__social">
          <p className="register__form__social__text">Hoặc đăng ký bằng</p>
          <div className="register__form__social__buttons">
            <button type="button" className="register__form__social__btn register__form__social__btn--google">
              <img src={googleLogo} alt="Google" />
              Google
            </button>
            <button type="button" className="register__form__social__btn register__form__social__btn--facebook">
              <img src={facebookLogo} alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register