import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import googleLogo from '../../assets/google-logo.png'
import facebookLogo from '../../assets/Facebook_Logo.png'

const Login = () => {
  const navigate = useNavigate();

  const testAccount = {
    email: 'abc@gmail.com',
    password: '123456'
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //chặn hành vi mặc định của form (gửi dữ liệu, tải lại trang)
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === testAccount.email && password === testAccount.password) {
      navigate('/');
    } else {
      alert('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__form__title">Đăng Nhập</h2>

        <div className="login__form__group">
          <label className="login__form__label">Tên đăng nhập hoặc Email</label>
          <input
            className="login__form__input"
            type="text"
            name="username"
            required
          />
        </div>

        <div className="login__form__group">
          <label className="login__form__label">Mật khẩu</label>
          <input
            className="login__form__input"
            type="password"
            name="password"
            required
          />
        </div>

        <div className="login__form__options">
          <label className="login__form__remember">
            <input
              className="login__form__remember__checkbox"
              type="checkbox"
              name="rememberMe"
            />
            Ghi nhớ đăng nhập
          </label>
          <Link to="/" className="login__form__forgot">Quên mật khẩu?</Link>
        </div>

        <button type="submit" className="login__form__submit">Đăng Nhập</button>

        <p className="login__form__register-link">
          Chưa có tài khoản? <Link to="/register">Đăng Ký</Link>
        </p>

        <div className="login__form__social">
          <p className="login__form__social__text">Hoặc đăng nhập bằng</p>
          <div className="login__form__social__buttons">
            <button type="button" className="login__form__social__btn login__form__social__btn--google">
              <img src={googleLogo} alt="Google" />
              Google
            </button>
            <button type="button" className="login__form__social__btn login__form__social__btn--facebook">
              <img src={facebookLogo} alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login