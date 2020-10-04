import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/favorites">favorites</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
