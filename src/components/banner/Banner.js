import React, { useEffect, useState } from "react";
import "./banner.css";
import RowCards from "../posters/RowCards";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../../constants/constants";
import {trending} from "../../urls"
import InfoModel from "./InfoModel";

let randomNum = getRandomInt(0,19);

const Banner = () => {

  
  const [id,setId]=useState();
  const [close,setClose]=useState()
  const [movie,setMovie]=useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results[0]);
        setMovie(res.data.results[randomNum]);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return (
    <>
    <div className="banner"
      style={{backgroundImage:movie?`url(${imageUrl+movie.backdrop_path})`:""}}
    >
      <div className="movie-items">
        <h1>{movie?movie.title:""}</h1>
        <p>
          {
            movie?movie.overview:""
          }
        </p>
        <div className="buttons">
          <button onClick={()=>{setId(movie.id); setClose(true)}} className="btn ">
            <i
              style={{ backgroundColor: "rgba(215, 215, 215, 0.03)" }}
              className="fa-solid fa-circle-play "
            ></i>
            Play
          </button>
          <button onClick={handleShow} className="btn">
            <i
              style={{
                fontSize: "16px",
                backgroundColor: "rgba(215, 215, 215, 0.03)",
                color: "white",
              }}
              className="bx bx-info-circle"
            ></i>
            More Info
          </button>
        </div>
      </div>
      <InfoModel movie={movie?movie:''} showModal={showModal} handleClose={handleClose} />
      <RowCards setClose={setClose} close={close} setId={setId} id={id} url={trending} title='Trending' />
    </div>
    </>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default Banner;
