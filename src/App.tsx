import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>        
        Test
      </Router>
    </ThemeProvider>
  );
}

export default App;
