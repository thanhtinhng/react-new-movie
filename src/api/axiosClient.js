import axios from 'axios';
import apiConfig from './apiConfig';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    // Thiết lập header cho request
    headers: {
        'Content-Type': 'application/json'
    },
    // Thêm api_key vào chuỗi truy vấn cho mỗi yêu cầu
    // paramsSerializer: Một hàm để chuyển đổi các tham số truy vấn thành chuỗi.
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

// Thêm interceptor cho yêu cầu trước khi gửi đi
axiosClient.interceptors.request.use(async (config) => {
    return config;
});

// Thêm interceptor cho phản hồi
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        // Nếu có dữ liệu, trả về dữ liệu
        return response.data;
    }
    return response;
}, (error) => {
    // Nếu có lỗi xảy ra, ném lỗi để xử lý ở nơi khác
    throw error;
});

export default axiosClient;
