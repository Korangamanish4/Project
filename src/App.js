import React, { useEffect, useState } from "react";
//import Spinner from "./component/Loader/Loader";
import Routing from "./Router";
import Demo from "./screens/Demo";
import Search from "./screens/Search";
import { userContext } from "./store/context";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
   // handleLogin();
  });

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <userContext.Provider value={setIsLoading}>
      {/* {isAuthenticated && <Routing />} */}
      <Routing />
    </userContext.Provider>
  );
}

export default App;
