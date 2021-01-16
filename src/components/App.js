import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts';
import PostById from '../pages/PostById';

function App() {
  return (
    <div className="app">
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
