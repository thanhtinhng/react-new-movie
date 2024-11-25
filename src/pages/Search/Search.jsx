import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieSearch from '../../components/moviesearch/MovieSearch1';
import './Search.scss';
import Filter from '../../components/filter/Filter';
const Search = () => {
    const { keyword, category } = useParams();

    return (
        <div className="search-container">
            <div className="search-header">
                <h2>Tìm Kiếm Phim</h2>
                <p className="search-description">
                    Khám phá kho phim đa dạng với hàng nghìn bộ phim hấp dẫn
                </p>
            </div>

            <MovieSearch keyword={keyword} />

            <Filter />

            <div className="search-tips">
                <h3>Gợi ý Tìm Kiếm</h3>
                <div className="tips-content">
                    <div className="tip-item">
                        <h4>Theo Thể Loại</h4>
                        <p>Hành động, Tình cảm, Kinh dị, Hoạt hình, ...</p>
                    </div>
                    <div className="tip-item">
                        <h4>Theo Quốc Gia</h4>
                        <p>Việt Nam, Hàn Quốc, Nhật Bản, Mỹ, ...</p>
                    </div>
                    <div className="tip-item">
                        <h4>Theo Năm</h4>
                        <p>2024, 2023, 2022, ...</p>
                    </div>
                </div>
            </div>

            <div className="popular-keywords">
                <h3>Từ Khóa Phổ Biến</h3>
                <div className="keyword-tags">
                    <span className="tag">Marvel</span>
                    <span className="tag">Anime</span>
                    <span className="tag">Netflix</span>
                    <span className="tag">DC Comics</span>
                    <span className="tag">Studio Ghibli</span>
                    <span className="tag">Disney</span>
                </div>
            </div>
        </div>
    );
}

export default Search;