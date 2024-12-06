import React, { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Carousel.scss';
import Button, { OutlineButton } from '../button/Button';
import Modal from '../modal/Modal';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';
import Trailer from '../trailer/Trailer';

const Carousel = () => {
    const [movies, setMovies] = useState([]);
    const [genresList, setGenresList] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Reset trailer state khi đóng modal
    const handleCloseTrailer = () => {
        setShowTrailer(false);
        setSelectedMovie(null);
    };

    // Mảng chứa ID các phim cần loại bỏ
    const excludedMovieIds = [179387];

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const params = { page: 1, language: 'vi' };
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                // Lọc bỏ phim kinh dị, phim người lớn và các phim trong danh sách loại trừ
                const filteredMovies = response.results.filter(movie => {
                    const isNotHorror = !movie.genre_ids.includes(27);  // 27 là id thể loại kinh dị
                    const isNotAdult = !movie.adult;
                    const isNotExcluded = !excludedMovieIds.includes(movie.id); // Kiểm tra ID có trong danh sách loại trừ
                    return isNotHorror && isNotAdult && isNotExcluded;
                });

                setMovies(filteredMovies.slice(0, 7));
            } catch (error) {
                console.error(error);
            }
        };
        const getGenres = async () => {
            try {
                const response = await tmdbApi.getGenresMovie();
                setGenresList(response.genres);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
        getGenres();
    }, []);

    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                    <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        autoplay={{ delay: 12000, disableOnInteraction: false }}
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <CarouselItem
                                        genresList={genresList}
                                        genres={movie.genre_ids}
                                        movie={movie}
                                        className={`${isActive ? 'active' : ''}`}
                                        onShowModal={() => {
                                            setSelectedMovie(movie);
                                            setShowModal(true);
                                        }}
                                        onShowTrailer={() => {
                                            setSelectedMovie(movie);
                                            setShowTrailer(true);
                                        }} />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {selectedMovie && (
                    <>
                        <Modal
                            className="modalFavourite"
                            active={showModal}
                            onClose={() => setShowModal(false)}
                        >
                            <h2>Thêm <span className="movieTitle">{selectedMovie.title}</span> vào danh sách yêu thích thành công.</h2>
                        </Modal>

                        <Modal
                            active={showTrailer}
                            onClose={handleCloseTrailer}
                        >
                            <Trailer key={selectedMovie.id} genre='movie' id={selectedMovie.id} />
                        </Modal>
                    </>
                )}
            </div>
        </>
    );
};

const CarouselItem = props => {
    const navigate = useNavigate();
    const movie = props.movie;
    const genres = props.genres;
    const genresList = props.genresList;

    const goToDetails = () => {
        navigate(`/movie/${movie.id}`);
    };

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
                            <OutlineButton onClick={props.onShowTrailer}>Trailer</OutlineButton>
                            <OutlineButton onClick={props.onShowModal}>+</OutlineButton>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
