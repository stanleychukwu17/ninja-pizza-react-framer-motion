import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import { TopBar } from '../tobar/TopBar';
import { Home } from '../Home/Home';
import { Toppings } from '../Toppings/Toppings';
import { Base } from '../Base/Base';
import { Order } from '../Order/Order';

import './app.scss';


const App = () => {

    return (
        <Router>
            <Provider store={store}>
                <div className='AppMain'>
                    <TopBar />
                    <div>
                        <Routes>
                            <Route path='home' element={<Home />} />
                            <Route path='toppings' element={<Toppings />} />
                            <Route path='base' element={<Base />} />
                            <Route path='order' element={<Order />} />
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </Provider>
        </Router>
    )
}

export default App;