import React, {useState} from 'react'
import PopUp from './components/PopUp'
import GlobalStyle from './styles/GlobalStyle';

const apiResponse = true;
const category = "Yo this dude!";
const value = 30;

const App = () => {
  const [isArticle, setIsArticle] = useState(apiResponse);

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <div className="App">
        <PopUp isArticle={isArticle} category={category} value={value}/>
      </div>
    </>
  );
};

export default App;