import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import './MovieSearch1.scss';

const MovieSearch = props => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword || '');
    const [selectedCategory, setSelectedCategory] = useState(category.movie);

    const goToSearch = () => {
        if (keyword.trim().length > 0) {
            navigate(`/${selectedCategory}/search/${keyword}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.code === 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className="movie-search-wrapper">
            <div className="category-select">
                <button 
                    className={`category-btn ${selectedCategory === category.movie ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.movie)}
                >
                    Phim Lẻ
                </button>
                <button 
                    className={`category-btn ${selectedCategory === category.tv ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.tv)}
                >
                    Phim Bộ
                </button>
            </div>

            <div className="movie-search">
                <input
                    type="text"
                    placeholder="Tìm kiếm phim..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <Button className="small-btn" onClick={goToSearch}>Tìm Kiếm</Button>
            </div>
        </div>
    );
}

export default MovieSearch;