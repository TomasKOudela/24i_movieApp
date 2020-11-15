import Home from './components/main/Home'
import PopularPageContent from './components/main/PopularPage'
import PopularSContent from './components/main/PopularS'
import FamilyPageContent from './components/main/FamilyPage'
import DocumentaryPageContent from './components/main/DocumentaryPage'
import SearchPageContent from './components/main/searchPage'
import './css/main.css'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/popular" component={PopularPageContent} />
              <Route path="/popularS" component={PopularSContent} />
              <Route path="/family" component={FamilyPageContent} />
              <Route path="/documentary" component={DocumentaryPageContent} />
              <Route path="/search" component={SearchPageContent} />
          </Switch>
        </Router>
   

    </>
  );
}

export default App;
