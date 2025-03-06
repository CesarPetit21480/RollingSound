
import { Buscador, CardDetail } from "../../Components";
import { userSearchMusic } from "../../hooks/userSearchMusic";


const Home = () => {
  const { valorMusic, onChangeInput, music } =
    userSearchMusic();

 
  return (
    <>
      <div className="my-5">
        <Buscador
          valorInput={valorMusic}
          onChangeInput={onChangeInput}
        />
      
        <CardDetail musica={music} />
      </div>
    </>
  );
};

export default Home;
