import React, {useState, useEffect} from 'react'
import PopUp from './components/PopUp'

const apiResponse = true;

function App(){
  const [isArticle, setArticle] = useState(apiResponse);


return (
  <div className="App">
    <PopUp isArticle={isArticle} />
  </div>
);
}

export default App;