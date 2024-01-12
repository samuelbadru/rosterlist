import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users/:userID' element={<UserPage/>}/>
      </Routes>
  );
}

export default App;
