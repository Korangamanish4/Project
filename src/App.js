import React, { useState } from "react";
import Spinner from "./component/Loader/Loader";
import Routing from "./Router";
import { userContext } from "./store/context";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <userContext.Provider value={setIsLoading}>
      {isLoading && <Spinner />}
      <Routing />
    </userContext.Provider>
  );
}

export default App;
