import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import './Genre.scss';
import Grid from '../../components/grid/Grid';
import MovieSearch from '../../components/moviesearch/MovieSearch2';
import Filter from '../../components/filter/Filter';

const Genre = () => {
  const { genre } = useParams();
  useEffect(() => {
    console.log(genre);
  }, [genre]);

  return (
    <>
      <div className="container">
        <div className="container__genre-header">
          <h2>{genre === category.movie ? 'Phim Lẻ' : 'Phim Bộ'}</h2>

          <div className="filter-container">
            <Filter />

            <div className='search'>
              <MovieSearch />
            </div>

          </div>
        </div>

        <Breadcrumb />

        <div className="container__movie-grid">
          <Grid category={genre} />
        </div>
      </div>
    </>
  );
};

export default Genre;
