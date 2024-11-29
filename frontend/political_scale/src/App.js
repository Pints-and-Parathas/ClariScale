import React, { useState, useEffect } from "react";
import PopUp from "./popUp/PopUp.component";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themeToggle/Theme";

const apiResponse = true;
const category = "Yo this dude!";
const value = 30;

function parseArticleData(data) {
  // Destructure the main elements
  const { article_info, author, is_article, outlet_info, publish_date, title } =
    data;

  // Extract overall alignment
  const overallAlignment = article_info.overall_alignment;

  // Extract themes
  const themes = article_info.themes.map((theme) => ({
    theme: theme.theme,
    politicalAlignment: theme.political_alignment,
    reasoning: theme.reasoning,
  }));

  // Extract outlet information
  const outletAlignment = outlet_info.overall_alignment;
  const outletQuestions = outlet_info.questions.map((q) => ({
    score: q.score,
    summary: q.summary,
  }));

  // Store other variables
  const isArticle = is_article;
  const publishDate = publish_date;
  const articleTitle = title;

  // Author
  const articleAuthor = author;

  // Log or use variables as needed
  console.log("Overall Alignment:", overallAlignment);
  console.log("Themes:", themes);
  console.log("Outlet Alignment:", outletAlignment);
  console.log("Outlet Questions:", outletQuestions);
  console.log("Is Article:", isArticle);
  console.log("Publish Date:", publishDate);
  console.log("Title:", articleTitle);
  console.log("Author:", articleAuthor);

  // Return parsed data
  return {
    overallAlignment,
    themes,
    outletAlignment,
    outletQuestions,
    isArticle,
    publishDate,
    articleTitle,
    articleAuthor,
  };
}

const App = () => {
  const [isArticle, setIsArticle] = useState(apiResponse);
  const [articleData, setArticleData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [selectedGradient, setSelectedGradient] = useState(
    "linear-gradient(45deg, #FFC312, #EE5A24)"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    let isComponentMounted = true;

    // Retrieve article data from chrome.storage
    const fetchArticleData = async () => {
      chrome.storage.local.get(["articleData"], (result) => {
        if (isComponentMounted) {
          if (result.articleData) {
            setArticleData(parseArticleData(result.articleData));
          }
        }
      });
    };

    fetchArticleData();

    // Define the handler for the storage change event
    const handleStorageChange = (changes, areaName) => {
      if (areaName === "local" && changes.articleData && isComponentMounted) {
        setArticleData(parseArticleData(changes.articleData.newValue));
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
          value={value}
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
