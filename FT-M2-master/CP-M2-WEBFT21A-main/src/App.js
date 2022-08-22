import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Houses from './components/Houses/Houses';
import HouseDetail from './components/HouseDetail/HouseDetail';
import CreateHouse from './components/CreateHouse/CreateHouse'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'> 
        <Houses />
      </Route> 
      <Route exact path='/houses/:houseId'> 
        <HouseDetail />
      </Route> 
      <Route path='/house/create'> 
        <CreateHouse />
      </Route>
    </div>
  );
};

export default App;
