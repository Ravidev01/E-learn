// import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUP/SignUp';
import HomePage from './component/HomePage/HomePage';
import CourseCard from './component/CourseCard/CourseCard';
import CourseDetails from './component/CourseDetails/CourseDetails';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="/" element={<> <Header/><HomePage/> <CourseCard/> <Footer/> </>}/>
          <Route path="course/:id" element={<><Header/> <CourseDetails/></>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
