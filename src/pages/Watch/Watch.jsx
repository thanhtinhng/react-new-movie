import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Watch.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Trailer from '../../components/trailer/Trailer';
import Grid from '../../components/grid/Grid';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Modal from '../../components/modal/Modal';

const Watch = () => {
    const { genre, id } = useParams();
    const [item, setItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [lightsOff, setLightsOff] = useState(false);
    const [activeEpisode, setActiveEpisode] = useState(1);
    const [activePart, setActivePart] = useState('MegaCloud');
    const [likeStatus, setLikeStatus] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await tmdbApi.detail(genre, id, { params: {} });
                setItem(response);
                window.scrollTo(0, 0);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    }, [genre, id]);

    const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const parts = ['Full', 'Phần 1', 'Phần 2', 'Phần 3', 'Phần 4'];
    const comments = [
        {
            user: 'Nguyễn Thành Tính',
            content: 'Phim hay quá! Cốt truyện lôi cuốn, diễn biến hấp dẫn từ đầu đến cuối. Đặc biệt là phần kỹ xảo và âm thanh làm rất tốt, tạo không khí gay cấn cho người xem.',
            time: '2 giờ trước'
        },
        {
            user: 'Nguyễn Hữu Trí',
            content: 'Diễn viên đóng rất tốt, nhập vai tự nhiên. Tương tác giữa các nhân vật rất chân thực, đặc biệt là những phân cảnh cảm xúc. Phim có nhiều thông điệp ý nghĩa về tình bạn và lòng dũng cảm.',
            time: '5 giờ trước'
        },
        {
            user: 'Uchiha Obito',
            content: 'Không thể đợi tập tiếp theo! Tình tiết cuối tập này quá căng thẳng, nhiều twist bất ngờ. Hy vọng đạo diễn sẽ giữ được phong độ này ở những tập sau. Thật sự rất hào hứng với hướng phát triển của các nhân vật.',
            time: '1 ngày trước'
        },
    ];

    const handleScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            // getBoundingClientRect là khoảng cách từ phần tử đến đầu viewport (màn hình hiển thị)
            // window.scrollY là khoảng cách đã cuộn từ đầu trang
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 100,
                behavior: 'smooth'
            });
        }
    };
    
    // Nếu click vào nút đang active -> reset về null
    // Nếu click vào nút khác -> set trạng thái mới
    const handleLikeClick = (status) => {
        setLikeStatus(likeStatus === status ? null : status);
    };

    return (
        <>
            <div className={`watch-container ${lightsOff ? 'lights-off' : ''}`}>
                <Breadcrumb />
                <div className="watch-layout">
                    <div className="watch-content">
                        <div className="video-section">
                            <div className="video-container">
                                <Trailer />
                                <div className="server-episodes">
                                    <h3>{genre === 'tv' ? 'Danh Sách Tập' : 'Chọn Phần'}</h3>
                                    <div className="list">
                                        {genre === 'tv' ? (
                                            episodes.map((ep) => (
                                                <button 
                                                    key={ep} 
                                                    className={`episode-btn ${activeEpisode === ep ? 'active' : ''}`}
                                                    onClick={() => setActiveEpisode(ep)}
                                                >
                                                    Tập {ep}
                                                </button>
                                            ))
                                        ) : (
                                            parts.map((part) => (
                                                <button 
                                                    key={part} 
                                                    className={`server-btn ${activePart === part ? 'active' : ''}`}
                                                    onClick={() => setActivePart(part)}
                                                >
                                                    {part}
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </div>
                                <div className="video-controls">
                                    <button onClick={() => setShowModal(true)}>
                                        <i className="fa-solid fa-heart"></i> Yêu Thích
                                    </button>
                                    <button onClick={() => setLightsOff(!lightsOff)}>
                                        <i className="fa-solid fa-lightbulb"></i> {lightsOff ? 'Bật Đèn' : 'Tắt Đèn'}
                                    </button>
                                    <button onClick={() => handleScrollTo('comments-section')}>
                                        <i className="fa-solid fa-comment"></i> Bình Luận
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Share Bar */}
                        <div className="share-bar">
                            <span>Chia sẻ: </span>
                            <button className="facebook"><i className="fab fa-facebook-f"></i></button>
                            <button className="x"><i class="fa-brands fa-x-twitter"></i></button>
                            <button className="telegram"><i className="fab fa-telegram-plane"></i></button>
                            <button className="line"><i className="fab fa-line"></i></button>
                        </div>

                        {/* Info Section */}
                        <div className="info-section">
                            <div className="movie-info">
                                {item && (
                                    <>
                                        <div className="basic-info">
                                            <div className="poster-container">
                                                <img
                                                    src={apiConfig.w500Image(item.poster_path)}
                                                    alt={item.title || item.name}
                                                />
                                                <div className="rating-buttons">
                                                    <button 
                                                        className={`like-btn ${likeStatus === 'like' ? 'active' : ''}`}
                                                        onClick={() => handleLikeClick('like')}
                                                    >
                                                        <i className="fa-solid fa-thumbs-up"></i> 1.2K
                                                    </button>
                                                    <button 
                                                        className={`dislike-btn ${likeStatus === 'dislike' ? 'active' : ''}`}
                                                        onClick={() => handleLikeClick('dislike')}
                                                    >
                                                        <i className="fa-solid fa-thumbs-down"></i> 123
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="title-overview">
                                                <h1>{item.title || item.name}</h1>
                                                <div className="genres">
                                                    {item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                                        <span key={i} className="genre-item">{genre.name}</span>
                                                    ))}
                                                </div>
                                                <p className="overview">{item.overview}</p>
                                            </div>
                                        </div>

                                        <div className="info-grid">
                                            <div className="info-item">
                                                <span>Ngày phát hành:</span>
                                                <span>{item.release_date || item.first_air_date}</span>
                                            </div>
                                            <div className="info-item">
                                                <span>Đánh giá:</span>
                                                <span>{item.vote_average.toFixed(1)}/10</span>
                                            </div>
                                            {genre === 'movie' ? (
                                                <>
                                                    <div className="info-item">
                                                        <span>Thời lượng:</span>
                                                        <span>{item.runtime} phút</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <span>Quốc gia:</span>
                                                        <span>{item.production_countries.map(i => i.name).join(', ')}</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="info-item">
                                                        <span>Số mùa:</span>
                                                        <span>{item.number_of_seasons}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <span>Tổng số tập:</span>
                                                        <span>{item.number_of_episodes}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <span>Quốc gia:</span>
                                                        <span>{item.production_countries.map(i => i.name).join(', ')}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <span>Tập mới nhất:</span>
                                                        <span>{item.last_air_date}</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* Comments Section */}
                                        <div className="comments-section" id="comments-section">
                                            <h3>Bình Luận</h3>
                                            <div className="comment-input">
                                                <input type="text" placeholder="Viết bình luận..." />
                                                <button><i className="fa-solid fa-paper-plane"></i></button>
                                            </div>
                                            <div className="comments-list">
                                                {comments.map((comment, index) => (
                                                    <div key={index} className="comment">
                                                        <div className="comment-avatar">
                                                            <i className="fa-solid fa-user"></i>
                                                        </div>
                                                        <div className="comment-content">
                                                            <h4>{comment.user}</h4>
                                                            <p>{comment.content}</p>
                                                            <span>{comment.time}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Similar Movies Grid */}
                            <div className="similar-movies">
                                <h2>Phim Đề Xuất</h2>
                                <Grid category={genre} limit={6}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                active={showModal}
                onClose={() => setShowModal(false)}
            >
                <h2>Thêm vào danh sách yêu thích thành công!</h2>
            </Modal>
        </>
    );
}

export default Watch;
