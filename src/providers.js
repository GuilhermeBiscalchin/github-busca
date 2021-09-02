import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provides";
import theme from './theme'



const Providers = () => {
  
  return (
    <main>
      <ThemeProvider theme = {theme}>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
      </ThemeProvider>
    </main>
  );
};

export default Providers;
