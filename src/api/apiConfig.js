const apiConfig = {
    // Mọi yêu cầu đến API sẽ bắt đầu với URL này để truy cập vào các endpoint của TMDb, chẳng hạn như movie, search, genre, v.v.
    baseUrl: 'https://api.themoviedb.org/3/',

    apiKey: process.env.REACT_APP_API_KEY,
    
    // Hàm trả về URL đầy đủ cho ảnh với kích thước gốc (original size)
    // Nhận vào đường dẫn ảnh (imgPath) và ghép vào URL ảnh gốc của TMDb
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    
    // Hàm trả về URL đầy đủ cho ảnh với chiều rộng cố định là 500px
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
