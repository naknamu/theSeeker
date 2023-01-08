import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html {
        font-size: 62.5%;
        line-height: 1.8;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        background-color: ${({theme}) => theme.colors.dark};
    }
`;

export default GlobalStyle;