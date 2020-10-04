import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div>
          <p>Similique in culpa libero sagittis lacinia gravida suscipit nostrud adipiscing.</p>
          <p>Proin porta voluptates qui porta harum cumque itaque, exercitation? Asperiores.</p>
          <p>Beatae necessitatibus lobortis taciti eaque eius! Incidunt vivamus voluptates, tristique.</p>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
