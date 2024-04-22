import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import { createGlobalStyle } from "styled-components";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "700" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export const GlobalStyles = createGlobalStyle`
  :root {
    --list-item-height: 30px;
    --dark: #2E3440;
    --less-dark: #4C566A;
    --light: #ECEFF4;
    --accent: #EBCB8B;
  }
  * {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    margin: 0;
    font-family: ${plexSans.style.fontFamily};
    font-size: 1.2rem;
    background: var(--dark);
    color: var(--light);
  }
  code {
    font-family: ${plexMono.style.fontFamily};
  }
`;
