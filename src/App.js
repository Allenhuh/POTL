import './App.css';
import { Card, CardImg, CardBody, CardText, Container } from 'reactstrap';
import { CardTitle, Button } from 'reactstrap';
import whiteDog from './assets/img/pom.jpg';
import whiteCat from './assets/img/white_cat.jpeg';
import brownDog from './assets/img/shiba.jpeg';
import NavBar from './components/Navbars/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
      <text className="app-content-text"> Have you seen them ? </text>
      <div className="container-content">
      <Card style={{width: '13.5rem', height:'20rem'}}>
          <CardImg top maxHeight='1vh' object-fit='contain' src={whiteDog} alt="whiteDog"/>
            <CardBody>
              <CardTitle>Fifi</CardTitle>
             <CardText>Last seen at Ang Mo Kio Ave 10</CardText>
              <Button color="danger">View Pet</Button>
            </CardBody>
          </Card>
          <Card style={{width: '13.5rem', height:'20rem'}}>
            <CardImg top src={whiteCat} alt="whiteCat"/>
              <CardBody>
                <CardTitle>Icy</CardTitle>
                <CardText>Last seen at Yishun Blk 250</CardText>
                <Button color="danger">View Pet</Button>
              </CardBody>
          </Card>
          <Card style={{width: '13.5rem', height:'20rem'}}>
            <CardImg top src={brownDog} alt="brownDog"/>
              <CardBody>
                <CardTitle>Macy</CardTitle>
                <CardText>Last seen at Punggol Blk 520</CardText>
                <Button color="danger">View Pet</Button>
              </CardBody>
          </Card>
      </div>
      </header>
    </div>
  );
}

export default App;
