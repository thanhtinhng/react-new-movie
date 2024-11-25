import React, { useState } from 'react';
import './Filter.scss';

const Filter = () => {

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    return (
        <div className="filter">
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                <option value="">Thể Loại</option>
                <option value="action">Hành Động</option>
                <option value="comedy">Hài</option>
                <option value="drama">Tâm Lý</option>
                <option value="animation">Hoạt Hình</option>
                <option value="thriller">Kinh Dị</option>
                <option value="sci-fi">Khoa Học Viễn Tưởng</option>
                <option value="romance">Lãng Mạn</option>
                <option value="fantasy">Giả Tưởng</option>
                <option value="documentary">Tài Liệu</option>
            </select>

            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="">Quốc Gia</option>
                <option value="us">Mỹ</option>
                <option value="jp">Nhật Bản</option>
                <option value="kr">Hàn Quốc</option>
                <option value="vn">Việt Nam</option>
                <option value="cn">Trung Quốc</option>
                <option value="fr">Pháp</option>
                <option value="in">Ấn Độ</option>
            </select>

            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="">Năm</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>

            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                <option value="">Ngôn Ngữ</option>
                <option value="en">Tiếng Anh</option>
                <option value="vi">Tiếng Việt</option>
                <option value="jp">Tiếng Nhật</option>
                <option value="kr">Tiếng Hàn</option>
                <option value="cn">Tiếng Trung</option>
                <option value="fr">Tiếng Pháp</option>
            </select>

            <select value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
                <option value="">Sắp Xếp</option>
                <option value="popularity.desc">Phổ Biến</option>
                <option value="release_date.desc">Ngày Phát Hành</option>
            </select>
        </div>
    )
}

export default Filter