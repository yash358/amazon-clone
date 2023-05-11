import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import CheckoutContainer from '../containers/CheckoutContainer';
import Login from './Login';
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App(){
    return(
        <Router>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<><HeaderContainer/>
                    <HomeContainer/>
                    </>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/checkout' element={<><HeaderContainer/><CheckoutContainer /></>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;