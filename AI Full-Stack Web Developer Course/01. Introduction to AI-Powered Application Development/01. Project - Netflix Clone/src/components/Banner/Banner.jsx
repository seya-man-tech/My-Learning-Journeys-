import React, { useEffect, useState } from 'react';
import NeflixBannerLogo from '../../assets/image/logo.png';
import { Play, Info } from 'lucide-react';

import styles from './Banner.module.css';
import { movieInstance } from '../../Utility/MovieInstance';
import requests from './../../Utility/requestUrls';

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
    const [bannerImage, setBannerImage] = useState({});

    useEffect(() => {
        async function fetchBannerImage() {
            const request = await movieInstance.get(requests.fetchNetflixOriginals);
            setBannerImage(
                request.data.results[Math.floor(Math.random() * request.data.results.length)]
            );
        }

        fetchBannerImage();
    }, []);

    console.log(bannerImage);
    function turncate(str, n) {
        return str?.length>n ? str.substr(0,n-1)+"..." : str
    }

    return (
      <div
        className={styles.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
        }}
      >



        
        {" "}
        <div className={styles.Content}>
          {/* netflix image */}
          <img
            className={styles.LogoImg}
            src={NeflixBannerLogo}
            alt="Netflix Banner Logo"
          />
          {/* title */}
          <h1 className={styles.Title}>{bannerImage?.original_name}</h1>
          {/* description */}
          <h1 className={styles.Description}>
            {turncate(bannerImage?.overview, 120)}
          </h1>
          {/* buttons */}
          <div className={styles.buttonsContainer}>
            <button className={styles.button}>
              <Play size={30} />
              Play
            </button>
            <button className={styles.button}>
              <Info size={30} />
              My List
            </button>
          </div>
        </div>
        {/* fading */}
        <div className={styles.fadebottom}></div>
      </div>
    );
}

export default Banner;