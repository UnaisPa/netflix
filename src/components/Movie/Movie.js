import React,{useState} from "react";
import {API_KEY,imageUrl} from "../../constants/constants"
import "./movie.css"
import {UserAuth} from "../../context/AuthContext"
import { db } from "../../firebase";
import {arrayUnion,updateDoc, doc } from "firebase/firestore";
const Movie = ({movie,isSmall,openModal}) => {

    const [like,setLike] = useState(false)
    const [saved,setSaved] = useState(false);
    const {user} = UserAuth();

    const movieId = doc(db,'users',`${user?.email}`)

    const saveShow = async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        try{
          await updateDoc(movieId,{
            savedShows:arrayUnion({
              id:movie.id,
              title:movie.title,
              img:movie.backdrop_path
            })
          })
        }catch(err){
          alert('This movie data have some issue!')
        }
      }else{
        alert('Please log in to save movies')
      }
    }

  return (
    
    <div className="image-hover">
        
      <img
        onClick={
          isSmall ? () => openModal(movie.id) : () => openModal(movie.id)
        }
        className={isSmall ? "small-poster" : "poster"}
        src={`${imageUrl + movie.backdrop_path}`}
        alt=""
      />
      <div onClick={saveShow} className="overlay-icon">
        {
            like?<i onClick={()=>setLike(false)} class="fa-solid fa-heart"></i>:<i onClick={()=>setLike(true)} className="fa-regular fa-heart"></i>
        }
      </div>
      <div onClick={()=>openModal(movie.id)} class="overlay-text">{movie.title}</div>
    </div>
  );
};

export default Movie;
