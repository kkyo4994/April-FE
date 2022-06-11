import React, { Suspense } from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import MainContainer from "../container/Main";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
