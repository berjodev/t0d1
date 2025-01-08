import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" component={() => <Notes />} />

        <Route path="/create" component={() => <NoteForm />} />

        <Route path="/:id">{(params) => <>Hello, {params.id}!</>}</Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  );
}

export default App;
