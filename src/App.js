import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl = {requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
