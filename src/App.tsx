import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

function App() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    completed: false,
    date: new Date(),
  });

  return (
    <Layout>
      <Header note={note} />
      <Switch>
        <Route path="/" component={() => <Notes />} />

        <Route
          path="/create"
          component={() => <NoteForm noteInfo={{ note, setNote }} />}
        />

        <Route path="/:id">{(params) => <>Hello, {params.id}!</>}</Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  );
}

export default App;
