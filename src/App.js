import Login from './components/Login';
import SignUp from './components/SignUp';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tools from './components/Tools';
import Seeds from './components/Seeds';
import Plants from './components/Plants';
import './components/App.css'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/seeds' element={<Seeds/>}></Route>
        <Route path='/plants' element={<Plants/>}></Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;
