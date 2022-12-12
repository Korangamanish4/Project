import React, { useState } from "react";

const Search = () => {
  const [userID, setUserID] = useState(null);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);
  const [showData, setShowData] = useState(false);

  const callingAPI = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/users/${userID}`)
      const data = await res.json();
      if (data?.data?.id) {
        setUserData(data.data);
        setShowData(true);
      } else if (userID === 0 || userID > 0) {
        setShowData(false);
        setMessage("No Data Found");
      } else {
        setShowData(false);
        setMessage("");
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        position: "fixed",
        height: "100%",
        width: "100%",
        gap:'1rem'
      }}
    >
      <input autoFocus onChange={(e) => setUserID(e.target.value)} />
      <button onClick={() => callingAPI()}>Submit</button>
      {showData ? (
        <div>
          <p> USER ID: {userData?.id}</p>
          <p>Email Id: {userData?.email}</p>
          <p> First Name: {userData?.first_name}</p>
          <p> Last Name: {userData?.last_name}</p>
          <img alt='' src={userData?.avatar} />
        </div>
      ) : (
        message
      )}
    </div>
  );
};

export default Search;
