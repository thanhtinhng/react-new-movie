import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './Cast.scss';

const Cast = () => {
    const { genre, id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCasts = async () => {
            try {
                const response = await tmdbApi.credits(genre, id);
                setCasts(response.cast.slice(0, 3));
            } catch (error) {
                console.log(error);
            }
        };
        getCasts();
    }, []);

    return (
        <div className="casts">
            {casts.map((cast) => (
                <CastCard cast={cast} />
            ))}
        </div>
    );
};

const CastCard = ({ cast }) => {
    return (
        <div className="cast-card">
            <div 
                className="cast-card__image" 
                style={{
                    backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`
                }}
            />
            <div className="cast-card__info">
                <h3 className="cast-card__info__name">{cast.name}</h3>
                <p className="cast-card__info__character">as <span>{cast.character}</span></p>
            </div>
        </div>
    );
};

export default Cast;
