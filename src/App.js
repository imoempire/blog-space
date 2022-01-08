import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ContactForm from './Page/AddStory/ContactForm';
import Blog from './Page/Blog/Blog';
import Home from './Page/Home/Home';
import Blog2 from './Page/Blog/Blog2'
import Home2 from './Page/Home/Home2';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
     <Route exact path="/" component={Home2}/>
     <Route exact path="/blog/:id" component={Blog2}/>
     <Route exact path="/addstory" component={ContactForm}/>
     </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
