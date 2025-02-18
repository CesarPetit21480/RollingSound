import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="mt-5 pt-5 pb-5 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/dd/e7/7d/dde77df6a4baf11fb4f296677657ccdd--rock-argentino-soda-stereo.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum architecto ad obcaecati eveniet, laborum iure rem. Dolorem, minus ab velit eum fuga maiores illo porro dolor sint voluptatem corporis. Sapiente.
           
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
