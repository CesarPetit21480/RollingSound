import './MusicDetail.css'
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "react-bootstrap";
function MusicDetail({musica}) {

  return (
    <div className='cardDetailContainer'>
       <div className='row'>
        {
          musica.map((tema)=>(
            
            <div key={tema.id}>


              
            </div>
          ))


        }




       </div>



    </div>
  )
}

export default MusicDetail
