
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/home' element={<LandingPage/>} />
    </Routes>
   </Router>
  );
}

export default App;
