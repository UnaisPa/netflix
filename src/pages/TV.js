import React from "react";
import {
  trendingT,
  trendingTv,
  originals,
} from "../urls";
import RowCards from "../components/posters/RowCards";
const TV = () => {
  return (
    <div style={{color:'white',paddingTop:'90px',backgroundColor:'black'}}>
      <RowCards url={originals} title="Netflix Originals" isSmall />
      <RowCards url={trendingTv} title="Trending TV Shows" isSmall />
      <RowCards url={trendingT} title="TV Shows" isSmall />
    </div>
  );
};

export default TV;
