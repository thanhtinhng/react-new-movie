import React from 'react'
import './Contact.scss'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi góp ý!');
  };

  return (
    <div className="contact__container">
      <div className="contact__breadcrumb">
        <Breadcrumb />
      </div>
      <div className="contact">
        <div className="contact__content">
          <h2 className="contact__title">Liên Hệ Với Chúng Tôi</h2>

          <div className="contact__info">
            <div className="contact__info__item">
              <i className="fa-solid fa-envelope"></i>
              <span>Email: newmovies@gmail.com</span>
            </div>
            <div className="contact__info__item">
              <i className="fa-solid fa-phone"></i>
              <span>Hotline: 0123456789</span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__group">
              <label className="contact__form__label">Họ và tên</label>
              <input
                type="text"
                className="contact__form__input"
                required
              />
            </div>

            <div className="contact__form__group">
              <label className="contact__form__label">Email</label>
              <input
                type="email"
                className="contact__form__input"
                required
              />
            </div>

            <div className="contact__form__group">
              <label className="contact__form__label">Nội dung góp ý</label>
              <textarea
                className="contact__form__textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="contact__form__group">
              <label className="contact__form__label">Đánh giá mức độ hài lòng</label>
              <div className="contact__form__rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="contact__form__rating__star">
                    <input type="radio" name="rating" value={star} />
                    <i className="fa-solid fa-star"></i>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="contact__form__submit">
              Gửi Góp Ý
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact