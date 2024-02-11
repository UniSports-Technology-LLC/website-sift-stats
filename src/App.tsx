import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import getLPTheme from './getLPTheme';


function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
