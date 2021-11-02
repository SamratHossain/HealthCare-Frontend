import {BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";

import Home from "./Screen/Home";

function App() {
  return (
    <Provider store={store}>
      <div> 
        <BrowserRouter>
            <Switch>
              <Route exact path="/"> <Home /> </Route>
            </Switch>
        </BrowserRouter> 
      </div>
    </Provider>
  );
}

export default App;
