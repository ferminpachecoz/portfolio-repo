import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/preview/ferminpacheco.site/' element={<Home />} />
    </Routes>
  );
}

export default App;
