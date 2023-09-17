import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './components/Student';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Student/>}></Route>
      <Route path='/students/create' element={<CreateStudent/>}></Route>
      <Route path='/students/update/:id' element={<UpdateStudent/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
