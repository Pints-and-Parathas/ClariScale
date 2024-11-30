import React, { useState, useEffect } from "react";
import PopUp from "./popUp/PopUp.component";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themeToggle/Theme";

const apiResponse = true;
const category = "Yo this dude!";
//const value = 30;

function parseArticleData(data) {
  // Destructure the main elements
  const {
    article_info,
    author,
    is_article,
    outlet_info,
    publish_date,
    title,
    combined_score,
  } = data;

  const overallAlignment = article_info.overall_alignment;

  const themes = article_info.themes.map((theme) => ({
    theme: theme.theme,
    politicalAlignment: theme.political_alignment,
    reasoning: theme.reasoning,
  }));

  const outletAlignment = outlet_info.overall_alignment;
  const outletQuestions = outlet_info.questions.map((q) => ({
    score: q.score,
    summary: q.summary,
  }));

  const isArticle = is_article;
  const publishDate = publish_date;
  const articleTitle = title;
  const combinedScore = combined_score;
  const articleAuthor = author;

  return {
    overallAlignment,
    themes,
    outletAlignment,
    outletQuestions,
    isArticle,
    publishDate,
    articleTitle,
    articleAuthor,
    combinedScore,
  };
}

const App = () => {
  const [isArticle, setIsArticle] = useState(apiResponse);
  const [articleData, setArticleData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [category, setCategory] = useState("");
  const [selectedGradient, setSelectedGradient] = useState(
    "linear-gradient(45deg, #FFC312, #EE5A24)"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

    // Function to determine the category based on combinedScore
    const getCategory = (combinedScore) => {
      if (combinedScore >= 0 && combinedScore <= 100) {
        if (combinedScore <= 20) return "Hard Left";
        if (combinedScore <= 40) return "Left";
        if (combinedScore <= 60) return "Center";
        if (combinedScore <= 80) return "Right";
        return "Hard Right"; // If score is between 81 and 100
      }
    };

  useEffect(() => {
    let isComponentMounted = true;

    // Retrieve article data from chrome.storage
    const fetchArticleData = async () => {
      chrome.storage.local.get(["articleData"], (result) => {
        if (isComponentMounted) {
          if (result.articleData) {
            const parsedData = parseArticleData(result.articleData);
            setArticleData(parsedData);
            setCategory(getCategory(parsedData.combinedScore));
          }
        }
      });
    };

    fetchArticleData();

    // Define the handler for the storage change event
    const handleStorageChange = (changes, areaName) => {
      if (areaName === "local" && changes.articleData && isComponentMounted) {
        const updatedData = parseArticleData(changes.articleData.newValue);
        setArticleData(updatedData);
        setCategory(getCategory(updatedData.combinedScore));
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      isComponentMounted = false;
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);


  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Apply global styles */}
      <div className="App">
        <PopUp
          isArticle={isArticle}
          category={category}
          value={articleData ? articleData.combinedScore : null}
          theme={theme}
          toggleTheme={toggleTheme}
          selectedGradient={selectedGradient}
          setSelectedGradient={setSelectedGradient}
          articleData={articleData}
        />
      </div>
    </ThemeProvider>
    // <h1>We out here eating balls n shit</h1>
  );
};

export default App;
