import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Carousel.scss';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const [movies, setMovies] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const params = { page: 1, language: 'vi' };
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                // Lọc bỏ phim kinh dị và phim người lớn
                const filteredMovies = response.results.filter(movie => {
                    const isNotHorror = !movie.genre_ids.includes(27);  // 27 là id thể loại kinh dị
                    const isNotAdult = !movie.adult;
                    return isNotHorror && isNotAdult;
                });

                setMovies(filteredMovies.slice(0, 7)); // Lấy tối đa 7 phim
            } catch (error) {
                console.error(error);
            }
        };
        const getGenres = async () => {
            try {
                const response = await tmdbApi.getGenresMovie(); // Sử dụng method mới
                setGenresList(response.genres);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
        getGenres();
    }, []);

    return (
        <div className="carousel">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                autoplay={{ delay: 20000, disableOnInteraction: false }}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <CarouselItem genresList={genresList} genres={movie.genre_ids} movie={movie} className={`${isActive ? 'active' : ''}`} />
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
    const genres = props.genres;
    const genresList = props.genresList;

    const getGenreNames = () => {
        if (!genresList) {
            return [];
        }
        const genreNames = [];
        genres.forEach(genreId => {
            const genre = genresList.find(item => item.id === genreId);
            if (genre) {
                genreNames.push(genre.name);
            }
        });
        return genreNames;
    };

    const GenreNames = getGenreNames();

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

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className={`carousel__item ${props.className}`}
                style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                        movie.backdrop_path || movie.poster_path
                    )})`,
                }}
            >
                <div className="carousel__item__content">
                    <div className="carousel__item__content__poster">
                        <img
                            src={apiConfig.w500Image(movie.poster_path)}
                            alt={movie.title}
                        />
                    </div>
                    <div className="carousel__item__content__info">
                        <h2 className="title">{movie.title}</h2>
                        <div className="genres">
                            {GenreNames && GenreNames.slice(0, 4).map((genre, i) => (
                                <span key={i} className="genres__item">{genre}</span>
                            ))}
                        </div>
                        <p className="description">{movie.overview}</p>
                        <div className="btns">
                            <Button onClick={goToDetails} className="watch-btn" ><i class="fa-regular fa-circle-play"></i>Xem phim</Button>
                            <OutlineButton onClick={openTrailer}>Trailer</OutlineButton>
                            <OutlineButton onClick={() => setShowModal(true)}>+</OutlineButton>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modalFavourite" active={showModal}>
                <ModalContent onClose={() => setShowModal(false)}>
                    <h2>Thêm <span className="movieTitle">{movie.title}</span> vào danh sách yêu thích thành công.</h2>
                </ModalContent>
            </Modal>
        </>
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
