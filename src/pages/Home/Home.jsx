import data from "../../data/musica.json";
import { CardDetail } from "../../Components";


const Home = () => {
  const info = Array.isArray(data) ? data : data.musica;
  return (
    <>
 <div className="my-5">
      <CardDetail musica={info} />
    </div>

    </>
   
  );
};

export default Home;
