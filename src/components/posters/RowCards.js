import React, { useEffect, useState } from 'react'
import "./rowcards.css"
import axios from "../../axios"
import {API_KEY,imageUrl} from "../../constants/constants"
import ReactPlayer from "react-player/lazy"
import {Spinner} from 'react-bootstrap'
import Movie from '../Movie/Movie'
const RowCards = ({isSmall,title,url,id,setId}) => {
  const[movies,setMovies]=useState([])
  const[urlId,setUrlId]=useState()
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading,setLoading] = useState(true);
  
  const openModal = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
        setModalOpen(true);
        
      }else{
        alert('An error occured');
      }
    }).catch((err)=>{
      alert('An errror '+err)
    })
    
  };

  id&& openModal(id);
  const closeModal = () => {
    setModalOpen(false);
    id&&setId(false)
    // handleCloseTrailer(false)
  };

  useEffect(()=>{
    axios.get(url)
    .then((res)=>{
      setMovies(res.data.results);
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);
  if(loading){
    return(
      <div  className="w-50 text-center" style={{marginLeft:"auto",marginRight:"auto",marginTop:"150px"}}>
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }
  return (
    <>
    <div className={isSmall?'small-rowcards':'rowcards'}>
        <h5>{title}</h5>
        <div className='rowcard'>
          {movies.map((movie)=>{
            // return <img onClick={isSmall?()=>openModal(movie.id):()=>openModal(movie.id)} className={isSmall?'small-poster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
            return <Movie openModal={openModal} movie={movie} isSmall={isSmall}  />
          })}            
        </div>
        {isModalOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${urlId.key}`} controls playing  width="100%" height="100%" />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default RowCards