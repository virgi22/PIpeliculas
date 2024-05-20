import { Container } from "react-bootstrap";
import MovieList from "../components/MovieList";

const HomePage = () => (
  <Container>
    <h1 className="text-center my-3">Películas</h1>
    <MovieList />
  </Container>
);

export default HomePage;
