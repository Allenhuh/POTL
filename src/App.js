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
      <div className="App-header">
        <ul></ul>
        <ul></ul>
          <text className="app-content-text"> Have you seen them 6 May ? </text>
        <ul></ul>
        <ul></ul>
      <header className="container-content">
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
                <CardText>Last seen at Yishun Blk 252</CardText>
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
      </header>
      </div>
    </div>
  );
}

export default App;
