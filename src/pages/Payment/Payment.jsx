
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import './Payment.scss';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập thanh toán thành công
    alert('Thanh toán thành công! Tài khoản của bạn đã được nâng cấp.');
    navigate('/');
  };

  if (!plan) {
    return <div>Không tìm thấy thông tin gói nâng cấp</div>;
  }

  return (
    <div className="payment">
      <Breadcrumb />
      <div className="payment__container">
        <h1 className="payment__title">Thanh Toán</h1>
        
        <div className="payment__summary">
          <h2>Thông tin đơn hàng</h2>
          <div className="payment__summary__details">
            <p>Gói dịch vụ: <span>{plan.name}</span></p>
            <p>Giá: <span>{plan.price}</span></p>
            <p>Chu kỳ: <span>Hàng tháng</span></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment__form">
          <div className="payment__methods">
            <h2>Phương thức thanh toán</h2>
            <div className="payment__methods__options">
              <label className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <i className="fa-regular fa-credit-card"></i>
                <span>Thẻ Credit/Debit</span>
              </label>
              
              <label className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <i className="fa-brands fa-paypal"></i>
                <span>PayPal</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="payment__card-details">
              <div className="form-group">
                <label>Số thẻ</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Ngày hết hạn</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Tên chủ thẻ</label>
                <input
                  type="text"
                  placeholder="NGUYEN VAN A"
                  required
                />
              </div>
            </div>
          )}

          <button type="submit" className="payment__submit">
            Thanh toán {plan.price}
          </button>
        </form>

        <div className="payment__security">
          <i className="fa-solid fa-lock"></i>
          <p>Thanh toán an toàn và bảo mật bởi NewMovies</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;