import React, {useState} from 'react'
import PopUp from './popUp/PopUp.component';
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