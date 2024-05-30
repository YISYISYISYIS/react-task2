import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
// import BooksProvider from "./constext/BooksProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
};

export default App;
