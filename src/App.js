import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Register from './Components/Register';
import Setting from './Components/Setting';
//  import SettingForm from './Components/SettingForm';
// import User from './Components/User';


function App() {
  return (
<Router>
      <Routes>
      <Route path='/' element={<Sidebar/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/setting' element={<Setting/>}/>
        {/* { <Route path='/settingform' element={<SettingForm/>}/> } */}
        {/* <Route path='/user' element={<User/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
