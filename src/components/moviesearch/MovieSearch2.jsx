import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../button/Button';
import './MovieSearch2.scss';

const MovieSearch2 = props => {
    const navigate = useNavigate();
    const { genre } = useParams(); // Lấy category từ URL params
    const [keyword, setKeyword] = useState(props.keyword || '');

    const goToSearch = () => {
        if (keyword.trim().length > 0) {
            navigate(`/${genre}/search/${keyword}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            goToSearch();
        }
    };

    return (
        <div className="movie-search">
            <input
                type="text"
                placeholder="Tìm kiếm phim..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleKeyPress}
            />
            <Button className="small" onClick={goToSearch}>Tìm Kiếm</Button>
        </div>
    );
}

export default MovieSearch2;