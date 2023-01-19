import { createGlobalStyle } from "styled-components";

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
        background-color: ${({ theme }) => theme.colors.dark};
    }
 
    @media all and (min-width: 768px) and (max-width: 1024px) { 
        html {
            font-size: 50%;
        }
    }
    
    @media all and (min-width: 480px) and (max-width: 768px) { 
        html {
            font-size: 45%;
        }
    }
    
    @media all and (max-width: 480px) { 
        html {
            font-size: 30%;
        }
    }
 

`;

export default GlobalStyle;
