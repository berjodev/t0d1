import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" component={() => <h1>1</h1>} />

        <Route path="/:id">{(params) => <>Hello, {params.id}!</>}</Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  );
}

export default App;
