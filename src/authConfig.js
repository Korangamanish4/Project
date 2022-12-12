export const msalConfig = {
    // auth: {
    //   clientId: "e594772d-4f07--8f81-237c03d606cb",
    //   authority: "https://login.microsoftonline.com/common/", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    //   redirectUri: "http://localhost:3000",
    // },
    auth: {
      clientId: "9ab5b01f-9c89-4244-ae38-ac07040c221f",
      authority: "https://login.microsoftonline.com/fb6ea403-7cf1-4905-810a-fe5547e98204/", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   //scopes: ["User.Read"]
   scopes: ["Directory.Read.All"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com"
  };