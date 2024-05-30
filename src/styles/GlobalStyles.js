import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


:root {
/* colors */
  --color-blue-primery: rgb(59,59,245);
  --color-pink-additional: rgb(254,61,154);
  --color-white-background: rgb(255,255,255);
  --color-white: rgb(248,248,248);
  --color-black: rgb(0,0,0);
/* shadows */
--shadow-primery: 0 0.5rem 5rem 0  rgb(59,59,245,0.4);
--shadow-pink: 0 0.5rem 5rem 0  rgb(254,61,154, 0.4);
--shadow-gray: 0 0.5rem 5rem 0  rgb(200,200,200, 0.4);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 62.5%;
  line-height: 2.4rem;
}
`;

export default GlobalStyles;
