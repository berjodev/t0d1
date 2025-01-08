import { Link, Route, Switch } from "wouter";

function App() {

  return (
    <div>
      <Switch>
      <Route path="/" component={() => <h1>1</h1>} />

      <Route path="/:id">
        {(params) => <>Hello, {params.id}!</>}
      </Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
    </div>
  )
}

export default App
