import React, { Suspense } from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import MainContainer from "../container/Main";
import ViewContainer from "../container/View";
import WirteContainer from "../container/Write";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="write" element={<WirteContainer />} />
          <Route path="view/:date`" element={<ViewContainer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
