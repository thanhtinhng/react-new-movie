import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { category } from '../api/tmdbApi';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import './Genre.scss'

const Genre = () => {

  const { genre } = useParams();

  useEffect(() => {
    console.log(genre)
  })

  return (
    <>
      <div className="container">
        <div className="container__genre-header">
          <h2>{genre === 'movie' ? 'Phim Lẻ' : 'Phim Bộ'}</h2>
        </div>
        {/* <div className="container__breadcrumb">
          <i class="fa-solid fa-house"></i>
          <p>Trang Chủ &gt;</p>
        </div> */}
        <Breadcrumb/>
      </div>

    </>
  )
}

export default Genre