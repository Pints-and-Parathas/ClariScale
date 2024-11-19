import React, {useState} from 'react'
import PopUp from './popUp/PopUp.component';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeToggle/Theme';
import SlidingPanel from './slidingPanel/SlidingPanel.component';


const apiResponse = true;
const category = "Yo this dude!";
const value = 30;

const App = () => {
  const [isArticle, setIsArticle] = useState(apiResponse);
  const [theme, setTheme] = useState('light');
  const [selectedGradient, setSelectedGradient] = useState(
    "linear-gradient(45deg, #FFC312, #EE5A24)"
  );

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Apply global styles */}
      <div className="App">
        <PopUp isArticle={isArticle} category={category} value={value} theme={theme} toggleTheme={toggleTheme} selectedGradient={selectedGradient} setSelectedGradient={setSelectedGradient}/>
      </div>
    </ThemeProvider>
  );
};

export default App;