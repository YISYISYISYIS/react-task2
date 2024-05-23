import React from "react";
import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: #2ec4b6;
`;

export default App;
