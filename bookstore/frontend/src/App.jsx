import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
