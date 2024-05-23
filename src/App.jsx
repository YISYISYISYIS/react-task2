import React from "react";
import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
