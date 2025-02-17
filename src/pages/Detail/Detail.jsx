import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './Detail.scss';
import Cast from '../../components/cast/Cast';
import Trailer from '../../components/trailer/Trailer';
import SlideList from '../../components/slidelist/SlideList';
import Button, { OutlineButton } from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { genre, id } = useParams();
  const [item, setItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const goToWatch = () => {
    navigate(`/${genre}/${id}/watch`);
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await tmdbApi.detail(genre, id, { params: {} });
        setItem(response);
        // window.scrollTo(0, 30)
      } catch (error) {
        console.log(error);
      }
    }
    getDetail();
  }, [genre, id]);

  return (
    <>
      {item && (
        <>

          <div
            className="movie-banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`
            }}
          />

          <div className='detail-content'>
            <div className="content">

              <div className="content__poster">
                <div
                  className="content__poster__img"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`
                  }}
                />
              </div>


              <div className="content__info">
                <h1 className="title">{item.title || item.name}</h1>


                <div className="genres">
                  {(() => {
                    if (!item.genres) {
                      return null;
                    }
                    const firstFiveGenres = item.genres.slice(0, 5);
                    return firstFiveGenres.map((genre, i) => (
                      <span className="genres__item">
                        <Link to={`/movie`} key={i}>
                          {genre.name}
                        </Link>
                      </span>
                    ));
                  })()}
                </div>


                <div className="movie-info">
                  <div className="info-item">
                    <span className="label">Ngày phát hành:</span>
                    <span className="value">{item.release_date || item.first_air_date}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Đánh giá:</span>
                    <span className="value">{item.vote_average.toFixed(1)}/10</span>
                  </div>


                  {genre === 'movie' ? (
                    <>
                      <div className="info-item">
                        <span className="label">Thời lượng:</span>
                        <span className="value">{item.runtime} phút</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Nhà sản xuất:</span>
                        <span className="value">{item.production_companies.map(i => i.name).join(', ')}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Quốc gia:</span>
                        <span className="value">{item.production_countries.map(i => i.name).join(', ')}</span>
                      </div>
                    </>


                  ) : (


                    <>
                      <div className="info-item">
                        <span className="label">Số mùa:</span>
                        <span className="value">{item.number_of_seasons}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Tổng số tập:</span>
                        <span className="value">{item.number_of_episodes}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Nhà sản xuất:</span>
                        <span className="value">{item.production_companies.map(i => i.name).join(', ')}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Quốc gia:</span>
                        <span className="value">{item.production_countries.map(i => i.name).join(', ')}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Tập mới nhất:</span>
                        <span className="value">{item.last_air_date}</span>
                      </div>
                    </>
                  )}
                </div>



                <p className="overview">{item.overview}</p>


                <div className="action-buttons">
                  <Button className="small-btn" onClick={goToWatch}>
                    <i className="fa-regular fa-circle-play"></i>
                    Xem Phim
                  </Button>
                  <OutlineButton className="small-btn" onClick={() => setShowModal(true)}>
                    <i className="fa-solid fa-plus"></i>
                    Thêm Vào Yêu Thích
                  </OutlineButton>
                </div>


                <div className="cast">
                  <h2>Diễn Viên</h2>
                  <Cast />
                </div>
              </div>
            </div>

            <div className="trailer-container">
              <Trailer className='trailer' />
              <h2 className='similar-header'>Phim Cùng Thể Loại</h2>
            </div>
            <SlideList category={genre} type="similar" id={item.id} />
          </div>

          <Modal
            active={showModal}
            onClose={() => setShowModal(false)}
          >
            <h2>Thêm <span className="movieTitle">{item.title || item.name}</span> vào danh sách yêu thích thành công.</h2>
          </Modal>
        </>
      )}
    </>
  );
}

export default Detail;
