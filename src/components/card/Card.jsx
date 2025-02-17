import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const Card = props => {
    const movie  = props.movie;
    const uri = '/' + category[props.category] + '/' + movie.id;
    const background = apiConfig.w500Image(movie.poster_path);

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = uri;
    }

    return (
        <Link draggable="false" onClick={handleClick}>
            <div className="card" style={{backgroundImage: `url(${background})`}}>
                <Button>
                    <i className="fa-regular fa-circle-play"></i>
                </Button>
            </div>
            <h3>{movie.title || movie.name}</h3>
        </Link>
    );
}

export default Card;
