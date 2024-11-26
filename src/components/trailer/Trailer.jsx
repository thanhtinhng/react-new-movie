import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import './Trailer.scss';

const Trailer = props => {

    var { genre, id } = useParams();

    if (props.genre && props.id) {
        genre = props.genre;
        id = props.id;
    }

    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {

                const response = await tmdbApi.getVideos(genre, id);

                if (response.results.length > 0) {
                    setTrailer(response.results[0]);
                }

            } catch (error) {
                console.log(error);
            }
        };
        fetchTrailer();
    }, []);

    if (!trailer) return null;

    return <TrailerVideo trailer={trailer} />;
};

const TrailerVideo = ({ trailer }) => {

    const iframeRef = useRef(null);

    // tỷ lệ khung hình 16:9
    useEffect(() => {
        const iframe = iframeRef.current;
        const width = iframe.offsetWidth;
        const height = width * 9 / 16;
        iframe.setAttribute('height', `${height}px`);
    }, []);

    return (
        <div className="trailer">
            <h2 className="trailer__title">{trailer.name}</h2>
            <iframe
                ref={iframeRef}
                width="100%"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                allowFullScreen
            />
        </div>
    );
};

export default Trailer;
