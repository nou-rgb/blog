
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Ajouter from './Ajouter';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
  <Router>
      
    <div className="App">
      <Navbar/>
      <div className="contenu">
        <Switch>
          <Route exact path='/'>
                 <Home/>
          </Route>
          <Route path='/ajouter'>
                 <Ajouter/>
          </Route>
          <Route path='/blogs/:id'>
                 <BlogDetail/>
          </Route>
          <Route path='*'>
                 <NotFound/>
          </Route>
        </Switch>
        
      </div>
     
    </div>
  </Router>

  );
}

export default App;
