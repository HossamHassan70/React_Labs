import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovDitails';


function App() {
  return (
    <div>
        <BrowserRouter> 
          <Navbar />
          <Switch> 
              <Route exact path={"/"} component={Home} /> 
              <Route exact path={"/movies"} component={Movies} />
              <Route exact path={"/movies/:id"}  component={MovieDetails} />
              <Route exact path={"*"} component={NotFound} />
            </Switch> 
        </BrowserRouter>
    </div>
  );
}

export default App;
