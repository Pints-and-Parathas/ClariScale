import React, {useState} from 'react'
import PopUp from './popUp/PopUp.component';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeToggle/Theme';


const apiResponse = true;
const category = "Yo this dude!";
const value = 30;

const App = () => {
  const [isArticle, setIsArticle] = useState(apiResponse);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Apply global styles */}
      <div className="App">
        <PopUp isArticle={isArticle} category={category} value={value} theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
};

export default App;