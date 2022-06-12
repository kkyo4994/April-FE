import React from "react";
import RootRouter from "./route";
import GlobalStyle from "./style/GlobalStyle";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RootRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
