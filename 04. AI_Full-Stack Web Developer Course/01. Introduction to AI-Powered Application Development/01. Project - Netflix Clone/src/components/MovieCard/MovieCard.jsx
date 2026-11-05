import React from "react";
import styles from './MovieCard.module.css';
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const IMAGE_BASE="https://image.tmdb.org/t/p/w500"
function MovieCard({ movie }) {
  const genres = movie?.genres || ['Adventure', 'Action', 'Thriller'];

  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />

      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover image"
        />
        <div className={styles.badge}>{movie?.badge || "Recently added"}</div>
        <div className={styles.buttonRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
        <div className={styles.metaRow}>
          <span className={styles.tag}>{movie?.matureRating || "U/A 16+"}</span>
          <span className={styles.tag}>{movie?.category || "Movie"}</span>
          <span className={styles.tag}>{movie?.quality || "HD"}</span>
        </div>
        <div className={styles.geners}>
          {genres.map((g, index) => (
            <span key={index}>
              {g}
              {index < genres.length - 1 && (
                <span className={styles.dot}>.</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
