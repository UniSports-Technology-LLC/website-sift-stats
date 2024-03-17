import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import DeleteAccount from './DeleteAccount/Delete';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import getLPTheme from './getLPTheme';

export type ModeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

export const ModeContext = createContext<ModeContextType>({
  mode: 'dark',
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const modeContextValue: ModeContextType = {
    mode,
    toggleColorMode,
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ModeContext.Provider value={modeContextValue}>
        <CssBaseline />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy-app" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Routes>
        </BrowserRouter>
      </ModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
