import React from 'react';
import './Upgrade.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Upgrade = () => {
  const navigate = useNavigate();

  const handleUpgrade = (plan) => {
    if (!plan.current) {
      navigate('/payment', { state: { plan } });
    }
  };

  const plans = [
    {
      name: 'Gói Cơ Bản',
      price: '0đ',
      period: '/tháng',
      features: [
        'Xem phim SD',
        'Có quảng cáo',
        'Xem trên 1 thiết bị',
        'Hỗ trợ cơ bản'
      ],
      buttonText: 'Đang Sử Dụng',
      current: true
    },
    {
      name: 'Gói Premium',
      price: '79.000đ',
      period: '/tháng',
      features: [
        'Xem phim Full HD',
        'Không quảng cáo',
        'Xem trên 4 thiết bị',
        'Hỗ trợ 24/7',
        'Tải phim về máy',
        'Nội dung độc quyền'
      ],
      buttonText: 'Nâng Cấp Ngay',
      highlighted: true
    },
    {
      name: 'Gói Gia Đình',
      price: '159.000đ',
      period: '/tháng',
      features: [
        'Tất cả tính năng Premium',
        'Xem trên 6 thiết bị',
        'Chia sẻ tài khoản',
        'Kiểm soát nội dung',
        'Hồ sơ trẻ em'
      ],
      buttonText: 'Nâng Cấp Ngay'
    }
  ];

  return (
    <div className="upgrade">
      <Breadcrumb />
      <div className="upgrade__container">
        <h1 className="upgrade__title">Nâng Cấp Tài Khoản</h1>
        <p className="upgrade__subtitle">
          Trải nghiệm NewMovies với chất lượng cao nhất và không giới hạn
        </p>

        <div className="upgrade__plans">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`upgrade__plan ${plan.highlighted ? 'highlighted' : ''}`}
            >
              <h2 className="upgrade__plan__name">{plan.name}</h2>
              <div className="upgrade__plan__price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="upgrade__plan__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`upgrade__plan__button ${plan.current ? 'current' : ''}`}
                disabled={plan.current}
                onClick={() => handleUpgrade(plan)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="upgrade__benefits">
          <h2>Quyền Lợi Thành Viên Premium</h2>
          <div className="upgrade__benefits__grid">
            <div className="benefit-item">
              <i className="fa-solid fa-film"></i>
              <h3>Chất Lượng Cao</h3>
              <p>Xem phim với chất lượng Full HD sắc nét</p>
            </div>
            <div className="benefit-item">
              <i className="fa-solid fa-ban"></i>
              <h3>Không Quảng Cáo</h3>
              <p>Trải nghiệm xem phim không gián đoạn</p>
            </div>
            <div className="benefit-item">
              <i className="fa-solid fa-download"></i>
              <h3>Tải Về Máy</h3>
              <p>Xem offline mọi lúc mọi nơi</p>
            </div>
            <div className="benefit-item">
              <i className="fa-solid fa-headset"></i>
              <h3>Hỗ Trợ 24/7</h3>
              <p>Giải đáp mọi thắc mắc nhanh chóng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;