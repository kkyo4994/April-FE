import React, { Suspense } from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import MainContainer from "../container/Main";
import WirteContainer from "../container/Write";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="write" element={<WirteContainer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
