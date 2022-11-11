import React from 'react';
import {BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route eact path = '/' component = { Home } />
      <section className='container'>
        <Switch>
          <Route exact path='/register' element = { Register } />
          <Route exact path='/login' element = { Login } />
        </Switch>
      </section>
    </div>
  </Router>
  );
}

export default App;

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
