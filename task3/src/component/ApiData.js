import React, { useState } from "react";
import axios from "axios";

const ApiData = () => {
  const [responseHeaders, setResponseHeaders] = useState({});

  const postData = async () => {
    const apiUrl = "https://chimpu.xyz/api/post.php";
    const requestData = { phonenumber: "8933062308" };

    try {
      // const response = await axios.post(apiUrl, requestData, {
      //   withCredentials: false,
      // });
      const response = await axios({
        method: "post",
        url: apiUrl,
        withCredentials: false,
        data: requestData,
      });

      const headers = response.headers;
      console.log(headers);
      setResponseHeaders(headers);
    } catch (error) {
      console.error("Error:", error);
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
