import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { privateRoutes } from "./routes/privateRoutes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.isExact}
              component={route.component}
              path={route.path}
            />
          ))}
          {/* <Redirect to="/" /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
