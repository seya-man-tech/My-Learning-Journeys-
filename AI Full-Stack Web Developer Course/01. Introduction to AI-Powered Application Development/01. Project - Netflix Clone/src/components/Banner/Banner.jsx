import React from 'react';
import NeflixBannerLogo from '../../assets/image/logo.png';
import { Play, Info } from 'lucide-react';
import styles from './Banner.module.css';
function Banner(props) {
    return (
        <div className={styles.banner}>
            <div className={styles.Content}>
              {/* netflix image */}
                <img className={styles.LogoImg} src={NeflixBannerLogo} alt="Netflix Banner Logo" />
                {/* title */}
                <h1 className={styles.Title}>Bridgerton</h1>
                {/* description */}
                <h1 className={styles.Description}>
                    Shondalnd's Enmmy-winning series brings julia Quinn's novels
                    to life,
                    as eight siblings seek their perfect match amid London's
                    scandals and soireés.
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
            <div className={styles.fadebottom}>

            </div>
        </div>
    );
}

export default Banner;