import { createContext, useState } from 'react';
import Create from './Create';
import { studentdetails } from './Data';
import Edit from './Edit';
import Home from './Home';
import View from './View';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

export const crudcontext = createContext()
function App() {

  const [data, setdata] = useState(studentdetails)

  console.log(data);

  return (
    <div>
    
   <crudcontext.Provider value={{data,setdata}}>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create/:userid' element={<Create/>}></Route>
          <Route path='/Edit/:index' element={<Edit/>}></Route>
          <Route path='/view/:userid' element={<View/>}></Route>
        </Routes>

      </BrowserRouter>
      </crudcontext.Provider>
   


    
    </div>
  );
}

export default App;
