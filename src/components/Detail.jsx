import React from "react";
import { useParams } from "react-router-dom";
import movies from "../movies.js";
import play from "../images/play-icon-black.png";
import play1 from "../images/play-icon-white.png";
import grp from "../images/group-icon.png";
import "./Detail.css";
function Detail() {
  const { id } = useParams();
  const index = id - 1;
  return (
    <>
      <div className="container-fluid">
        <div className="Background">
          <img
            className="image1_Detail"
            alt="..."
            src={movies[index].backgroundImg}
          />
        </div>
        <div className="ImageTitle">
          <img
            className="ImageTitle_img"
            alt={movies[index].title}
            src={movies[index].titleImg}
          />
        </div>

        <div className="ContentMeta">
          <div className="Controls">
            <button className="Player">
              <img src={play} alt="" />
              <span>Play</span>
            </button>
            <button className="Player Player1">
              <img src={play1} alt="" />
              <span>Trailer</span>
            </button>
            <div className="AddList">
              <span />
              <span />
            </div>
            <div className="GroupWatch">
              <div className="div11">
                <img src={grp} alt="" width="100%" />
              </div>
            </div>
          </div>
          <div className="SubTitle">{movies[index].subTitle}</div>
          <div className="Description">{movies[index].description}</div>
        </div>
      </div>
    </>
  );
}

export default Detail;
