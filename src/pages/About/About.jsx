import React from 'react';
import './About.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const About = () => {
  return (
    <div className="about">
      <Breadcrumb />
      <div className="about__container">
        <h1 className="about__title">Giới Thiệu</h1>
        
        <div className="about__content">
          <section className="about__section">
            <h2>Về NewMovies</h2>
            <p>NewMovies là nền tảng xem phim trực tuyến hàng đầu, cung cấp kho phim đa dạng với chất lượng cao. Chúng tôi cam kết mang đến trải nghiệm giải trí tuyệt vời nhất cho người dùng.</p>
          </section>

          <section className="about__section">
            <h2>Sứ Mệnh</h2>
            <p>Sứ mệnh của chúng tôi là mang điện ảnh chất lượng đến gần hơn với khán giả Việt Nam, góp phần phát triển văn hóa xem phim trong nước.</p>
          </section>

          <section className="about__section">
            <div className="about__features">
              <div className="feature-item">
                <i className="fa-solid fa-film"></i>
                <h3>Kho Phim Đa Dạng</h3>
                <p>Hàng nghìn bộ phim từ nhiều quốc gia, đa dạng thể loại</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-closed-captioning"></i>
                <h3>Phụ Đề Chuyên Nghiệp</h3>
                <p>Phụ đề Việt hóa chất lượng cao, đảm bảo trải nghiệm xem tốt nhất</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-display"></i>
                <h3>Chất Lượng Cao</h3>
                <p>Hỗ trợ xem phim Full HD và 4K trên nhiều thiết bị</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-headset"></i>
                <h3>Hỗ Trợ 24/7</h3>
                <p>Đội ngũ hỗ trợ nhiệt tình, sẵn sàng giải đáp mọi thắc mắc</p>
              </div>
            </div>
          </section>

          <section className="about__section">
            <h2>Cam Kết Của Chúng Tôi</h2>
            <ul className="about__commitments">
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Cập nhật phim mới nhanh chóng</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Chất lượng phim được đảm bảo</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Bảo mật thông tin người dùng</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Trải nghiệm xem phim mượt mà</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;