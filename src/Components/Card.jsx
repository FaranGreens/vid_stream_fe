import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddWatchList } from "../Redux/Actions/myAction";
import styles from "../CSS/card.module.css";

function Card({ e }) {
  const [watchstate, setwatchState]=useState(true);
  const [style, setStyle] = useState({
    display: "none",
  });
  let islogin = useSelector((store) => {
    return store.isLoggedIn
  })
const dispatch= useDispatch();
  function onHover() {
    setStyle({ display: "flex", zIndex: "10" });
  }
  function offHover() {
    setStyle({ display: "none", zIndex: "0" });
  }

  const Addtowatchlist=( )=>{
    dispatch(AddWatchList(e));
    setwatchState(false);
  }
  return (
    <Link to={islogin ? `/movies/${e.id}`:`/`}>
    <div
      className={styles.cardDiv}
      key={e.poster_path}
      onMouseEnter={(e) => {
        onHover();
      }}
      onMouseLeave={(e) => {
        offHover();
      }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.cardImg}
          src={`https://image.tmdb.org/t/p/w1280${e.poster_path}`} alt=""
        />
      </div>
      <div className={styles.movieDetailsDiv} style={style}>
        <p className={styles.cardText}>{e.title}</p>
        <p className={styles.cardText}>{e.adult ? "18+" : "13+"}</p>
    
      <div className={styles.btnDiv}>
                    <button className={styles.cardMovieWatchbtm} ><i className="fa-solid fa-play"></i>
              &nbsp;&nbsp;&nbsp;WATCH NOW </button>
                </div>
                <div className={styles.btnDiv}>
                    
                    {
                watchstate? <button className={styles.cardMovieWatchbtm} onClick={Addtowatchlist}>
                 <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp; ADD TO WATCHLIST
            </button>: <button className={styles.cardMovieWatchbtm} onClick={Addtowatchlist}> <i class="fa-sharp fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;
                  ADDED TO WATCHLIST
            </button>
              }
                </div>
            </div>
      </div>
      </Link>
  );
}

export default Card;
