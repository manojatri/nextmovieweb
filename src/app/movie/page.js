import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'

const Movie = async() => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5944197d6emsh6393168d23b7b9cp1565a6jsne3e658cf75e2',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Serials & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => { return <MovieCard key={curElem.id} {...curElem} /> })}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Movie