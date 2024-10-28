import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Default light mode styles */
  :root {
    --background: #ffffff; /* Light mode background */
    --color: #333333; /* Light mode text color */
    --shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Light mode shadow */
  }

  /* Dark mode styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --background: #333333; /* Dark mode background */
      --color: #ffffff; /* Dark mode text color */
      --shadow: 0px 2px 8px rgba(255, 255, 255, 0.2); /* Dark mode shadow */
    }
  }
`;

export default GlobalStyle;