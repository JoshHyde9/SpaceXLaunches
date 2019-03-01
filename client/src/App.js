import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import launches from './components/launches';
import Launch from './components/launch';
import './App.css';
import logo from './SpaceX-Logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
          <a href="/"><img src={logo} alt="SpaceXLogo" style={{ width: 400, display: 'block', margin: 'auto'}}/></a>
            <Route exact path="/" component={launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
