import api from "../../api";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Songs.module.css";

const SongPage = ({ songs }) => {
  // const [ingredients, setIngredients] = useState([]);
  //
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await api.get("/ingredients");
  //       console.log("response", response);
  //       setIngredients(response.data.data);
  //     } catch (e) {}
  //   };
  //
  //   getData();
  // }, []);

  return (
    // <div className={styles.ingredients}>
    //   {ingredients.map((ingredient) => (
    //     <div key={ingredient.id} className={styles.ingredient}>
    //       <Image src={ingredient.image} width={400} height={300} />
    //       <div className={styles.ingredientInfo}>
    //         <span>
    //           <Link href={`/songs/${ingredient.id}`}>
    //             {ingredient.name}
    //           </Link>
    //         </span>
    //         <span>{ingredient.cost}</span>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className={styles.songs}>
      {songs.map((song) => (
        <div key={song.id} className={styles.song}>
          <Link href={"/"}>
            <Image src={song.image} width={300} height={200} />
          </Link>
          <p className={styles.songInfo}>{song.name}</p>
          <p className={styles.songInfo}>{song.artist}</p>
          <p className={styles.songInfo}>{song.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default SongPage;

export async function getStaticProps(context) {
  let songs = [];
  try {
    const response = await api.get("/songs");
    console.log("response", response);
    songs = response.data;
  } catch (e) {}

  return {
    props: {
      songs,
    }, // will be passed to the page component as props
  };
}
