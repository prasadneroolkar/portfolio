import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import Resume from "./Resume";
import Porfolio from "./porfolio";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import Particless from '../src/Components/Particless';



function App() {
  const location=useLocation();
  return (
    <>
    <Particless/>
   <AnimatePresence>
    <Switch location={location} key={location.key}>
    <Route exact path="/" component={Home}/>
      <>
      <Navbar/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/porfolio" component={Porfolio}/>
      <Route exact path="/contact" component={Contact}/>
      </>
    </Switch>
    </AnimatePresence>
    </>
   
  );
}

export default App;
