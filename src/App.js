import Header from "./components/Header";
import { ThemeProvider } from  'styled-components';

import GlobalStyles from './styles/global';
import colors from './styles/colors'
import usePersistedState from "./utils/usePersistedState";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = usePersistedState('theme', 'dark');

  return (
    <div className="App">
      <ThemeProvider theme={colors[theme]}>
        <GlobalStyles />
        <Header onTheme={{ theme, setTheme }}/>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
