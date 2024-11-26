import React, { useState, useEffect } from 'react';
import './Favourite.scss';
import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import Button, { OutlineButton } from '../../components/button/Button';
import Card from '../../components/card/Card';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Favourite = () => {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [favouriteTvShows, setFavouriteTvShows] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    const tvIds = [209867, 94605, 1429]; // Friren, Arcane, Attack on Titan
    const movieIds = [519182, 912649, 1184918, 533535]; // Despicable Me, Venom, Wild Robot, Deadpool

    useEffect(() => {
        const getDetailContent = async (id, type) => {
            try {
                const response = await tmdbApi.detail(type, id, { params: {} });
                return response;
            } catch (error) {
                console.log(error);
            }
        };

        const getFavouriteContent = async () => {
            try {
                const detailedTvShows = await Promise.all(
                    tvIds.map(id => getDetailContent(id, 'tv'))
                );
                setFavouriteTvShows(detailedTvShows);

                const detailedMovies = await Promise.all(
                    movieIds.map(id => getDetailContent(id, 'movie'))
                );
                setFavouriteMovies(detailedMovies);
            } catch (error) {
                console.log(error);
            }
        };

        const getPopularMovies = async () => {
            try {
                const response = await tmdbApi.getMoviesList('popular', {
                    params: {
                        page: 1,
                        language: 'vi'
                    }
                });
                setPopularMovies(response.results.slice(0, 6));
            } catch (error) {
                console.log(error);
            }
        };

        getFavouriteContent();
        getPopularMovies();
    }, []);

    const handleRemoveFromFavourites = (id, type) => {
        if (type === 'movie') {
            setFavouriteMovies(
                favouriteMovies.filter(function(movie) {
                    if (movie.id !== id) {
                        return true;    // giữ vì id khác với id cần xóa
                    } else {
                        return false;   // bỏ vì id trùng với id cần xóa
                    }
                })
            );
        } else {
            setFavouriteTvShows(
                favouriteTvShows.filter(function(show) {
                    if (show.id !== id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            );
        }
    };

    const renderFavouriteItem = (item, type) => (
        <div key={item.id} className="favourite-item">
            <div className="favourite-item__poster">
                <img src={apiConfig.w500Image(item.poster_path)} alt={item.title || item.name} />
            </div>
            <div className="favourite-item__content">
                <h3 className="favourite-item__content__title">{item.title || item.name}</h3>
                <div className="favourite-item__content__details">
                    <p className="favourite-item__content__details__row">
                        <span className="favourite-item__content__details__label">Loại:</span> 
                        {type === 'movie' ? 'Phim lẻ' : 'Phim bộ'}
                    </p>
                    <p className="favourite-item__content__details__row">
                        <span className="favourite-item__content__details__label">Thể loại:</span> 
                        {item.genres.map(genre => genre.name).join(', ')}
                    </p>
                    <p className="favourite-item__content__details__row">
                        <span className="favourite-item__content__details__label">Quốc gia:</span> 
                        {item.production_countries.map(country => country.name).join(', ')}
                    </p>
                    <p className="favourite-item__content__details__row">
                        <span className="favourite-item__content__details__label">Nhà sản xuất:</span> 
                        {item.production_companies.map(company => company.name).join(', ')}
                    </p>
                    <p className="favourite-item__content__details__row">
                        <span className="favourite-item__content__details__label">Đánh giá:</span> 
                        {item.vote_average.toFixed(1)}/10
                    </p>


                    {type === 'movie' ? (
                        <p className="favourite-item__content__details__row">
                            <span className="favourite-item__content__details__label">Thời lượng:</span> 
                            {item.runtime} phút
                        </p>
                    ) : (
                        <>
                            <p className="favourite-item__content__details__row">
                                <span className="favourite-item__content__details__label">Số mùa:</span> 
                                {item.number_of_seasons}
                            </p>
                            <p className="favourite-item__content__details__row">
                                <span className="favourite-item__content__details__label">Tổng số tập:</span> 
                                {item.number_of_episodes}
                            </p>
                            <p className="favourite-item__content__details__row">
                                <span className="favourite-item__content__details__label">Tập mới nhất:</span> 
                                {item.last_air_date}
                            </p>
                        </>
                    )}

                </div>
                <div className="favourite-item__content__actions">
                    <Link to={`/${type}/${item.id}`}>
                        <Button className="favourite-item__content__actions__watch-btn">
                            <i className="fa-regular fa-circle-play"></i>
                            Xem phim
                        </Button>
                    </Link>
                    <OutlineButton onClick={() => handleRemoveFromFavourites(item.id, type)}
                        className="favourite-item__content__actions__remove-btn">
                        <i class="fa-solid fa-trash-can"></i>
                        Xóa
                    </OutlineButton>
                </div>
            </div>
        </div>
    );

    return (
        <div className="favourite">
            <Breadcrumb />
            <div className="favourite__container">
                <div className="favourite__main">
                    <h2 className="favourite__main__title">Danh Sách Yêu Thích</h2>
                    <div className="favourite__main__list">
                        {favouriteTvShows.map(show => renderFavouriteItem(show, 'tv'))}
                        {favouriteMovies.map(movie => renderFavouriteItem(movie, 'movie'))}
                    </div>
                </div>
                <div className="favourite__sidebar">
                    <h3 className="favourite__sidebar__title">Có Thể Bạn Sẽ Thích</h3>
                    <div className="favourite__sidebar__movies">
                        {popularMovies.map((movie) => (
                            <Card 
                                category={category.movie} 
                                movie={movie} 
                                key={movie.id}
                                className="favourite__sidebar__movies__card" 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourite;
