import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Tracker from './pages/tracker/Tracker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <div className="wrapper">
          <Navbar />
          <div id="slider"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tracker">
              <Tracker />
            </Route>
            <Route path="/admin">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
