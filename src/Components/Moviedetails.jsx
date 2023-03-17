import { useEffect, useState } from "react";
import Styles from "../CSS/Moviedtails.module.css";
import Player from "./Player";
import { Button } from "@chakra-ui/react";

function Moviedetails({ data }) {
  let [key, setkey] = useState("BRb4U99OU80");
  let [play, setplay] = useState(false);

  let img = data.backdrop_path ? data.backdrop_path : data.poster_path;
  let url = `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=fb3b71a956ae9826b4af1a7eb6799dd9&language=en-US`;

  function getID() {
    fetch(url)
      .then((r) => r.json())
      .then((res) => {
        console.log(res);
        setkey(res.results[0].key)
      });
  }

  useEffect(() => {
    getID();
  }, [data]);
  if (play && key != undefined) {
    return <Player id={key} onclick={(val) => setplay(val)} />;
  } else
    return (
      <div className={Styles.Container}>
        <div className={Styles.BackgroundImage}>
          <img
            className={Styles.img}
            src={"https://image.tmdb.org/t/p/w1280" + img}
            alt=""
          />
        </div>
        <div className={Styles.Imagetitle}>
          <h4>Subscriber</h4>
          <h2>{data.title}</h2>
          <h4>
            {(data.runtime / 60).toFixed(0) +
              " hr " +
              (data.runtime % 60) +
              " mins"}{" "}
          </h4>
          <h5>{data.overview}</h5>
          <div className={Styles.Control}>
            <div>
              <Button color="#000" bg={"blue.500"} px={4} py={3} onClick={() => setplay(true)}>Play</Button>
            </div>

            <div className={Styles.Controldiv}>
              <Button className={Styles.btn} color="#000" bg={"blue.500"}>Watch List</Button>
              <Button color="#000" bg={"blue.500"}>Share</Button>
            </div>
          </div>

          <div className={Styles.lang}>
            <div className={Styles.wrapper}>
              <button className={Styles.button}>English</button>
            </div>
            <div>
              <button className={Styles.button}>தமிழ்</button>
            </div>
            <div>
              <button className={Styles.button}>हिंदी</button>
            </div>
            <div>
              <button className={Styles.button}>తెలుగు</button>
            </div>
            <div>
              <button className={Styles.button}>ಕನ್ನಡ</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Moviedetails;
