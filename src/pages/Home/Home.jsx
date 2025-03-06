
import { Buscador, CardDetail } from "../../Components";
import { userSearchMusic } from "../../hooks/userSearchMusic";


const Home = () => {
  const { valorMusic, onChangeInput, handleOnSubmit, music } =
    userSearchMusic();

 
  return (
    <>
      <div className="my-5">
        <Buscador
          valorInput={valorMusic}
          onChangeInput={onChangeInput}
          handleOnSubmit={handleOnSubmit}
        />
        <CardDetail musica={music} />
      </div>
    </>
  );
};

export default Home;
