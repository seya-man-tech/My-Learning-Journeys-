import  { useEffect, useState } from "react";



import SlideShow from '../SlideShow/SlideShow';
import styles from './DisplayRow.module.css';
// import { movies } from '../../Data/Data';
import { movieInstance } from '../../Utility/MovieInstance';
import requests from '../../Utility/requestUrls';
function DisplayRow() {


  
    const [movies, setMovies] = useState({
        trending: [],
        netflixOrginals: [],
        topRated: [],
        action: [],
        comedy: [],
        horror: [],
        romance: [],
        docmuntaries: []
        
    })
    useEffect(() => {
        fetchMovies()
    },[])

    const fetchMovies = async () => {
        try {
            const [trendingRes, netflixRes, topRatedRes, actionRes, comedyRes, horrorRes, romanceRes, docRes] = await Promise.all([
                movieInstance.get(requests.fetchTrending),
                movieInstance.get(requests.fetchNetflixOriginals),
                movieInstance.get(requests.fetchTopRatedMovies),
                movieInstance.get(requests.fetchActionMovies),
                movieInstance.get(requests.fetchComedyMovies),
                movieInstance.get(requests.fetchHorrorMovies),
                movieInstance.get(requests.fetchRomanceMovies),
                movieInstance.get(requests.fetchDocumentaries),
            ])
            setMovies({
              trending: trendingRes.data.results,
              netflixOrginals: netflixRes.data.results,
              topRated: topRatedRes.data.results,
              action: actionRes.data.results,
              comedy: comedyRes.data.results,
              horror: horrorRes.data.results,
              romance: romanceRes.data.results,
              docmuntaries: docRes.data.results,
            });
        } catch (error) {
           console.log(error) 
        }

    }
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOrginals} />
      <SlideShow title="Actoins" movies={movies.action} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
    </div>
  );
}

export default DisplayRow;