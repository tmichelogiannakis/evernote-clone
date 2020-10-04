import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from 'rebass';
import Navbar from './components/molecules/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box backgroundColor="gray.100">
          <Switch>
            <Route path="/favorites">favorites</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
