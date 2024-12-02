import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './Grid.scss';

import { OutlineButton } from '../button/Button';
import Card from '../card/Card';

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

import ReactPaginate from 'react-paginate';

const Grid = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // Trang hiện tại
    const [totalPages, setTotalPages] = useState(0);

    const { keyword } = useParams();

    const limit = props.limit || 20;

    // Mảng chứa ID các phim cần loại bỏ
    const excludedMovieIds = [179387];

    const fetchMovies = async (currentPage = 1) => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: currentPage,
                language: 'vi',
            };

            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.popular, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.top_rated, { params });
            }
        } else {
            const params = {
                page: currentPage,
                query: keyword,
            };
            response = await tmdbApi.search(props.category, { params });
        }
        
        // Lọc bỏ các phim trong danh sách loại trừ
        const filteredResults = response.results.filter(movie => 
            !excludedMovieIds.includes(movie.id)
        );
        
        const limitedResults = filteredResults.slice(0, limit);
        setMovies(limitedResults);
        setTotalPages(response.total_pages);
        setPage(currentPage);
    };

    useEffect(() => {
        fetchMovies();
    }, [props.category, keyword]);

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1; // ReactPaginate uses 0-indexed pages
        fetchMovies(selectedPage);
    };

    const totalPagesWithLimit = Math.min(totalPages, 100);

    const PaginationComponent = () => (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={totalPagesWithLimit} // Tổng số trang
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick} // Xử lý khi trang được chọn
            containerClassName={'pagination'} // class CSS tổng thể
            pageClassName={'page-item'} // class cho mỗi số trang
            pageLinkClassName={'page-link'} // class cho link mỗi số trang
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'} // class cho trang hiện tại
            forcePage={page - 1}
        />
    );

    return (
        <>
            {totalPages > 1 && <PaginationComponent />}
            <div className="movie-grid">
                {movies.map((movie, i) => (
                    <Card className="card" category={props.category} movie={movie} key={i} />
                ))}
            </div>
            {totalPages > 1 && <PaginationComponent />}
        </>
    );
};

export default Grid;
