import React from 'react'
import {
    action,
    romance,
    horror,
    comedy
  } from "../urls";
  import RowCards from "../components/posters/RowCards";
const Movies = () => {
  return (
    <div style={{color:'white',paddingTop:'90px',backgroundColor:'black'}}>
      <RowCards url={comedy} title="Comedy Movies" isSmall />
      <RowCards url={horror} title="Horror Movies" isSmall />
      <RowCards url={romance} title="Romantic Movies" isSmall />
      <RowCards url={action} title="Action Movies" isSmall />
    </div>
  )
}

export default Movies