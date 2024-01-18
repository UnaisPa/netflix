import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "../Movie/movie.css";
import "../posters/rowcards.css";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { onSnapshot, updateDoc, doc } from "firebase/firestore";
const SavedShow = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
        setMovies(doc.data().savedShows);
    })
  }, [user?.email]);
  const movieRef = doc(db,'users',`${user?.email}`)
  const deleteShow =async(id)=>{
    try{
        const result = movies.filter((item)=>item.id!==id);
        await updateDoc(movieRef,{
            savedShows:result,
        })
    }catch(err){
        console.log(err)
    }
  }
  return (
    <div className="rowcard">
      {movies.length==0?<h5 className="text-center mx-auto text-secondary">No Shows saved yet!</h5>: movies.map((movie,id) => {
        return (
          <div key={id} className="image-hover">
            <img
              className="small-poster"
              src={`${imageUrl + movie?.img}`}
              alt=""
            />
            <div onClick={()=>deleteShow(movie.id)} className="overlay-icon">
                {
                    <i  class="fa-solid fa-heart"></i>
                }
            </div>
            <div class="overlay-text">{movie.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedShow;
