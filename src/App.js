import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormikComponent from './FormikComponent';
import FormikComponent1 from './FormikComponent1';


function App() {
  return (
    // <div className="App">
    //   {/* <FormikComponent/> */}
    // </div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/FormikComponent' element={<FormikComponent/>}/>
        {/* <Route path="/FormikComponent1" element={<FormikComponent1/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
