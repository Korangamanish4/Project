import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./screens/Album";
import Home from "./screens/Home";
import AlbumDetails from "./screens/AlbumDetails"
import PageNotFound from "./component/PageNotFound/PageNotFound";

const Routing = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/userId=:userId" element={<Album />} />
        <Route path="/albums/userId=:userId/albumDetails/albumId=:id" element={<AlbumDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;