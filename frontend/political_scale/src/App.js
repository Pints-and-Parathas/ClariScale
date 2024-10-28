import React, {useState} from 'react'
import PopUp from './components/PopUp'
import GlobalStyle from './styles/GlobalStyle';

const apiResponse = true;

function App(){
  const [isArticle, setisArticle] = useState(apiResponse);


  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <div className="App">
        <PopUp isArticle={isArticle} />
      </div>
    </>
  );
};

export default App;