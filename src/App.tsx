import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Switch, Route} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import List from "./pages/List";
import Details from "./pages/Details";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={List}/>
        <Route path="/users/:id" exact component={Details}/>
        <Route render={() => <p>Not found</p>}/>
      </Switch>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
