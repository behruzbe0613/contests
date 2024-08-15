import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layaut from './component/Layaut';
import Problems from './component/Problems';
import Leadboard from './component/Leadboard';
import Register from './component/Register';
import Account from './component/Account';
import Login from './component/Login';
import WorkSpace from './component/WorkSpace';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layaut/>}>
          <Route index element={<Problems/>}/>
          <Route path='leadboard' element={<Leadboard/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='code-editor' element={<WorkSpace/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
