import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {imageUrl} from "../../constants/constants";
import "./infoModel.css";
function InfoModel({ handleClose, showModal, movie }) {
  return (
    <>
    {console.log(movie)}
      <Modal
        centered
        show={showModal}
        onHide={handleClose}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modelBody" style={{backgroundImage:movie?`url(${imageUrl+movie.backdrop_path})`:""}}>
            <h4>{movie.title}</h4>
            <p style={{opacity:'80%'}}>Released On {movie.release_date}</p>
            <p style={{opacity:'80%'}}>Language : {movie.original_language}</p>
            <p style={{opacity:'80%'}}>{movie.overview}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoModel;
