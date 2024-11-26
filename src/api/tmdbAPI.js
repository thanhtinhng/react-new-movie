import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

// Obj chứa các phương thức gọi API
const tmdbApi = {
    // lấy danh sách phim theo loại
    getMoviesList: (type, params) => {
        const url = `movie/${movieType[type]}`; // Tạo URL dựa trên loại phim
        return axiosClient.get(url, params); // Gửi yêu cầu GET đến API
    },
    
    // lấy danh sách chương trình truyền hình theo loại
    getTvList: (type, params) => {
        const url = `tv/${tvType[type]}`;
        return axiosClient.get(url, params);
    },

    // lấy video của một danh mục cụ thể
    getVideos: (cate, id) => {
        const url = `${category[cate]}/${id}/videos`;
        return axiosClient.get(url, {params: {}});
    },

    // tìm kiếm phim hoặc chương trình truyền hình
    search: (cate, params) => {
        const url = `search/${category[cate]}`;
        return axiosClient.get(url, params);
    },

    // lấy nội dung chi tiết
    detail: (cate, id, params) => {
        const url = `${category[cate]}/${id}?language=vi`;
        return axiosClient.get(url, params);
    },

    // lấy thông tin người làm phim hoặc diễn viên
    credits: (cate, id) => {
        const url = `${category[cate]}/${id}/credits`;
        return axiosClient.get(url, {params: {}});
    },

    // lấy danh sách phim hoặc chương trình truyền hình tương tự
    similar: (cate, id) => {
        const url = `${category[cate]}/${id}/similar`;
        return axiosClient.get(url, {params: {}});
    },

    getGenresMovie: () => {
        const url = `genre/movie/list?language=vi`
        return axiosClient.get(url, {params: {}});
    },

    getGenresTv: () => {
        const url = 'genre/tv/list?language=vi';
        return axiosClient.get(url, {params: {}});
    }
}

export default tmdbApi;
