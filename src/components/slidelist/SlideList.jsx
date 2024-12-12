import React, { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi from '../../api/tmdbApi';
import { Navigation } from 'swiper/modules';
import './SlideList.scss'
import Card from '../card/Card';

const SlideList = props => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let rs
            const params = { language: 'vi' };
            if (props.type !== 'similar') {
                if (props.category === 'movie') {
                    rs = await tmdbApi.getMoviesList(props.type, { params })
                }
                else {
                    rs = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                rs = await tmdbApi.similar(props.category, props.id);
            }
            const results = rs.results
            const limitedResults = results.slice(0, 20);
            setMovies(limitedResults);
        }
        getList();
    }, []);

    return (
        <div className="list">
            <Swiper navigation={true} modules={[Navigation]}
                grabCursor={true}
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {
                    movies.map((movie, i) => (
                        <SwiperSlide key={i}>
                            <Card movie={movie} category={props.category} className='card'/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default SlideList;
