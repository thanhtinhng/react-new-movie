import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Slide.scss';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const params = { page: 1, language: 'vi' };
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                const filteredMovies = response.results.filter(movie => !movie.genre_ids.includes(27)); // Loại bỏ phim kinh dị
                setMovies(filteredMovies.slice(0, 5)); // Lấy tối đa 5 phim
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="carousel">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                slidesPerView={1}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <CarouselItem movie={movie} className={`${isActive ? 'active' : ''}`} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movies.map((movie, index) => (
                <TrailerPopup key={index} movie={movie} />
            ))}
        </div>
    );
};

const CarouselItem = props => {
    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/movie/${movie.id}`);
    };

    const movie = props.movie;

    const openTrailer = async () => {
        const modal = document.querySelector(`#trailer_${movie.id}`);
        const videos = await tmdbApi.getVideos(category.movie, movie.id);
        const iframe = modal.querySelector('iframe');

        if (videos.results.length) {
            iframe.src = `https://www.youtube.com/embed/${videos.results[0].key}`;
        } else {
            modal.querySelector('.modal__content').innerText = 'Trailer not available.';
        }

        modal.classList.add('active');
    };

    return (
        <div
            className={`carousel__item ${props.className}`}
            style={{
                backgroundImage: `url(${apiConfig.originalImage(
                    movie.backdrop_path || movie.poster_path
                )})`,
            }}
        >
            <div className="carousel__item__content container">
                <div className="carousel__item__content__poster">
                    <img
                        src={apiConfig.w500Image(movie.poster_path)}
                        alt={movie.title}
                    />
                </div>
                <div className="carousel__item__content__info">
                    <h2 className="title">{movie.title}</h2>
                    <p className="description">{movie.overview}</p>
                    <div className="btns">
                        <Button onClick={goToDetails} className="watch-btn" >Xem phim</Button>
                        <OutlineButton onClick={openTrailer}>Trailer</OutlineButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrailerPopup = ({ movie }) => {
    const iframeRef = useRef(null);

    const closeTrailer = () => {
        if (iframeRef.current) {
            iframeRef.current.src = '';
        }
    };

    return (
        <Modal id={`trailer_${movie.id}`} onClose={closeTrailer}>
            <ModalContent onClose={closeTrailer}>
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height="500"
                    title="Trailer"
                ></iframe>
            </ModalContent>
        </Modal>
    );
};

export default Carousel;
