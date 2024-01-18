import React from "react";
import Banner from "../components/banner/Banner";
import {action,romance,horror,comedy,documentries,originals} from "../urls"
import RowCards from "../components/posters/RowCards";

const Home = () => {
  return <>
    <Banner/>
    <div style={{backgroundColor:'black', color:"white"}} className="second-page">
        <RowCards url={action} title='Action' isSmall />
        <RowCards url={romance} title='Romance' isSmall />
        <RowCards url={horror} title='Horror' isSmall />
        <RowCards url={comedy} title='Comedy' isSmall />
        <RowCards url={originals} title='Netflix Originals' isSmall />
        <RowCards url={documentries} title='Documentries' isSmall />
      </div>
  </>;
};

export default Home;
