# NewMovies - Nền Tảng Xem Phim Trực Tuyến

## Hướng Dẫn Cài Đặt và Chạy (Vietnamese)

### Yêu Cầu Hệ Thống
- Node.js phiên bản v22.10.0
- npm (Node Package Manager)
- Trình duyệt web hiện đại (Chrome, Firefox, Edge,...)
- API key từ TMDb

### Đăng Ký API Key TMDb
1. Truy cập [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup) để tạo tài khoản
2. Sau khi đăng nhập, vào [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
3. Chọn "Create" -> "Developer"
4. Điền thông tin cần thiết để đăng ký API
5. Sau khi được phê duyệt, bạn sẽ nhận được API key
6. Sao chép API key và dán vào file .env của project

### Các Bước Cài Đặt

1. Cài đặt các dependencies:

```bash
npm install
```

2. Tạo file .env trong thư mục gốc và thêm API key:

```bash
REACT_APP_API_KEY=your_tmdb_api_key
```

3. Chạy ứng dụng ở môi trường development:

```bash
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

### Các Lệnh Có Sẵn
- `npm start`: Khởi chạy ứng dụng ở môi trường development
- `npm test`: Chạy test
- `npm run build`: Build ứng dụng cho môi trường production

### Công Nghệ Sử Dụng
- React.js
- SCSS
- Swiper
- Axios
- React Router DOM
- TMDb API

---

## Project Structure
```
src/
  ├── api/            # API configuration and services
  ├── assets/         # Images, fonts, and other static files
  ├── components/     # Reusable components
  ├── pages/          # Page components
  ├── routes/         # Route configurations
  ├── scss/          # Global SCSS files
  ├── App.jsx        # Root component
  └── index.js       # Entry point
```

## Features
- Xem phim trực tuyến
- Tìm kiếm phim
- Lọc phim theo thể loại
- Xem trailer
- Thêm vào danh sách yêu thích
- Đăng ký/Đăng nhập
- Responsive design

---

# NewMovies - Online Movie Streaming Platform

## Installation and Setup Guide (English)

### System Requirements
- Node.js version v22.10.0
- npm (Node Package Manager)
- Modern web browser (Chrome, Firefox, Edge,...)
- TMDb API key

### Get TMDb API Key
1. Go to [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup) to create an account
2. After logging in, navigate to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
3. Select "Create" -> "Developer"
4. Fill in the required information to register for API access
5. Once approved, you will receive your API key
6. Copy the API key and paste it into the project's .env file

### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Navigate to project directory:

```bash
cd newmovies
```

3. Install dependencies:

```bash
npm install
```

4. Create .env file in root directory and add API key:

```bash
REACT_APP_API_KEY=your_tmdb_api_key
```

5. Run the development server:

```bash
npm start
```

The application will run at [http://localhost:3000](http://localhost:3000)

### Available Scripts
- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

### Technologies Used
- React.js
- SCSS
- Swiper
- Axios
- React Router DOM
- TMDb API

---

