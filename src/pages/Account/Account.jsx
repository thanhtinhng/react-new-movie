import React, { useState } from 'react';
import './Account.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '0123456789',
    plan: 'Gói Cơ Bản',
    avatar: 'https://i.pravatar.cc/150',
    joinDate: '01/01/2024'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Xử lý cập nhật thông tin
    alert('Cập nhật thông tin thành công!');
  };

  const renderProfile = () => (
    <div className="account__content__profile">
      <div className="account__content__profile__avatar">
        <img src={userData.avatar} alt="Avatar" />
        {editMode && (
          <button className="change-avatar">
            <i className="fa-solid fa-camera"></i>
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="account__content__profile__form">
        <div className="form-group">
          <label>Họ và tên</label>
          <input
            type="text"
            value={userData.fullName}
            disabled={editMode}
            onChange={(e) => setUserData({...userData, fullName: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={userData.email}
            disabled={!editMode}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="tel"
            value={userData.phone}
            disabled={editMode}
            onChange={(e) => setUserData({...userData, phone: e.target.value})}
          />
        </div>

        <div className="form-actions">
          {!editMode ? (
            <button 
              type="button" 
              className="edit-button"
              onClick={() => setEditMode(true)}
            >
              <i className="fa-solid fa-pen"></i>
              Chỉnh sửa
            </button>
          ) : (
            <>
              <button type="submit" className="save-button">
                <i className="fa-solid fa-check"></i>
                Lưu thay đổi
              </button>
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => setEditMode(false)}
              >
                Hủy
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );

  const renderSubscription = () => (
    <div className="account__content__subscription">
      <div className="subscription-info">
        <h3>Thông tin gói dịch vụ</h3>
        <div className="plan-details">
          <p>Gói hiện tại: <span>{userData.plan}</span></p>
          <p>Ngày tham gia: <span>{userData.joinDate}</span></p>
          <p>Trạng thái: <span className="active">Đang hoạt động</span></p>
        </div>
        <button className="upgrade-button" onClick={() => window.location.href = '/upgrade'}>
          <i className="fa-solid fa-arrow-up"></i>
          Nâng cấp gói dịch vụ
        </button>
      </div>

      <div className="billing-history">
        <h3>Lịch sử thanh toán</h3>
        <div className="history-table">
          <table>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Gói dịch vụ</th>
                <th>Số tiền</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2024</td>
                <td>Gói Cơ Bản</td>
                <td>0đ</td>
                <td><span className="status success">Thành công</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="account">
      <Breadcrumb />
      <div className="account__container">
        <h1 className="account__title">Tài Khoản Của Tôi</h1>

        <div className="account__content">
          <div className="account__content__tabs">
            <button
              className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <i className="fa-solid fa-user"></i>
              Thông tin cá nhân
            </button>
            <button
              className={`tab ${activeTab === 'subscription' ? 'active' : ''}`}
              onClick={() => setActiveTab('subscription')}
            >
              <i className="fa-solid fa-credit-card"></i>
              Gói dịch vụ
            </button>
          </div>

          <div className="account__content__body">
            {activeTab === 'profile' ? renderProfile() : renderSubscription()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;