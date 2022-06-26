import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from './lib/apollo';
import { Event } from "./pages/Event";
import { Router } from './Router';

function App() {
 return (
  <ApolloProvider client={client}>
   <BrowserRouter>
    <Router />
   </BrowserRouter>
  </ApolloProvider>
 )
}

export default App;
