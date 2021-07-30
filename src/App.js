import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import Persons from './components/Persons/Persons';
function App() {
  return (
    <div id="toDoContainer" className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
        <Route strict exact path="/persons" component={Persons}/>

      </Switch>
    </div>
  );
}

export default App;
