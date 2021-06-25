import Header from './components/Header/Header.js';
import  './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './components/Pages/Trending/Trending.js';
import Series from './components/Pages/Series/Series';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';


function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <div className="app">
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
