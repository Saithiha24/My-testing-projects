import Navbar from "./Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Teach from "./Teach/Teach";
import Home from "./Home/Home";
import Developer from "./Developer/Developer";
import NewsDetail from "./NewsDetail/NewsDetail";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/teachnology'><Teach /></Route>
        <Route exact path='/developer'><Developer/></Route>
        <Route exact path='/detail/:id'><NewsDetail/></Route>
      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}
export default App;
