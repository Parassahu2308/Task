import React, { useState } from "react";
import axios from "axios";

const ApiData = () => {
  const [responseHeaders, setResponseHeaders] = useState({});
  const postData = async () => {
    const apiUrl = "https://chimpu.xyz/api/post.php";
    const requestData = { phonenumber: "89445678" };
    try {
      const response = await axios({
        url: apiUrl,
        method: "post",
        body: JSON.stringify(requestData),
      });

      console.log(response);
      console.log(response.headers);
      setResponseHeaders(response.headers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={postData}>Send Data</button>
      <div>
        <h2>Response Headers:</h2>
        <pre>{JSON.stringify(responseHeaders)}</pre>
      </div>
    </div>
  );
};

export default ApiData;
