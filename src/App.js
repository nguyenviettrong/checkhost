import React, { Fragment }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import IpInfo from './pages/IpInfo';
import CheckPing from './pages/CheckPing';
import CheckHttp from './pages/CheckHttp';
import CheckTcp from './pages/CheckTcp';
import CheckUdp from './pages/CheckUdp';
import CheckDns from './pages/CheckDns';

function App() {
  return (
    <Fragment>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/ip-info' exact component={IpInfo} />
                <Route path='/check-ping' exact component={CheckPing} />
                <Route path='/check-http' exact component={CheckHttp} />
                <Route path='/check-tcp' exact component={CheckTcp} />
                <Route path='/check-udp' exact component={CheckUdp} />
                <Route path='/check-dns' exact component={CheckDns} />
            </Switch>
            <Footer />
        </Router>
    </Fragment>
  );
}

export default App;
