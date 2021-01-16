import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../../pages/Posts/Posts';
import PostById from '../../pages/PostById/PostById';

function App() {
  return (
    <div className="app">
      <h1>Try React Query</h1>
      <Switch>

        <Route path="/posts" exact>
          <Posts />
        </Route>

        <Route path="/posts/:id">
          <PostById />
        </Route>

        <Route path="/*">
          <Redirect to="/posts" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
