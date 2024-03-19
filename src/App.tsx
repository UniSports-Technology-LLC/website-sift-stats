import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import About from './Screens/About/About';
import Contact from './Screens/Contact/Contact';
import DeleteAccount from './Screens/Delete/Delete';
import Home from './Screens/Home/Home';
import AppPrivacy from './Screens/Privacy/App/Privacy';
import WebsitePrivacy from './Screens/Privacy/Website/Privacy';
import Terms from './Screens/Terms/Terms';
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
            <Route path="/privacy-website" element={<WebsitePrivacy />} />
            <Route path="/privacy-app" element={<AppPrivacy />} />
            <Route path="/terms-website" element={<Terms />} />
            <Route path="/terms-app" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
