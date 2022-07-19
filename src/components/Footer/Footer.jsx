import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Music from "../../assets/MuzykaChemia.mp3";
import { Howl, Howler } from "howler";

const Footer = () => {
  //   const [musicIsPlaying, setMusicIsPlaying] = React.useState(true);
  // var sound = new Howl({
  //   src: Music,
  //   autoplay: false,
  //   loop: true,
  //   volume: 0.25,
  // });
  // const togglePlay = () => {
  //   if(sound.playing()){
  //       sound.mute(false)
  //       setMusicIsPlaying(false)
  //   }else{
  //       sound.mute(true)
  //       setMusicIsPlaying(true)
  //   }
  //   console.log(sound.playing())
  // }
  // React.useEffect(() => {
  //   sound.play()
  // })
  return (
    <div className="Footer">
      <div className="footer-left">
        <h3>
          Cetus<span>Food</span>
        </h3>

        <p className="footer-links">
          <Link to="/">Główna</Link>
          <Link to="/order">Zamów jedzenie</Link>
          <Link to="/log-in">Zaloguj się</Link>
        </p>

        <p className="footer-company-name">CetusFood &copy; 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Rzeszów </span> PL(Poland)
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+48 886 668 544</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:contact@cetuspro.com">support@cetuspro.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Kim jesteśmy</span>
          jesteśmy firmą u której zamówisz swoje ulubione jedzenie
        </p>
        {/* <button id="btn" onClick={togglePlay}>
          <i className={musicIsPlaying?'bx bx-volume-full':'bx bx-volume-mute'}></i>
        </button> */}
      </div>
    </div>
  );
};

export default Footer;
