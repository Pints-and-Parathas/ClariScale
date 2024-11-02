import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0; /* Reset margin for the body */
        font-family: Arial, sans-serif; /* Add a default font */
        background-color: #f0f0f0; /* Optional: Set a default background for the whole app */
        color: #333; /* Optional: Set a default text color for the whole app */
    }
`;

export default GlobalStyle;