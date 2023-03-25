
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import PostForm from "./Components/PostForm/PostForm";

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/LandingPage' element={<LandingPage/>} />
      <Route path='/PostForm' element={<PostForm/>} />
    </Routes>
   </Router>
  );
}

export default App;
