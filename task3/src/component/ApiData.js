import React, { useState } from "react";
import axios from "axios";

const ApiData = () => {
  const [phone, setPhone] = useState();
  const [headers, setHeaders] = useState("");

  const postData = async () => {
    const data = {
      phonenumber: phone,
    };

    try {
      const response = await fetch("https://chimpu.xyz/api/post.php", {
        method: "POST",
        body: data,
      });

      // const response = await axios.post(
      //   "https://chimpu.xyz/api/post.php",
      //   data
      // );

      const headersText = response.headers.toString();
      console.log(headersText);
      setHeaders(headersText);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h1>API Data Display</h1>
      <input
        type="tel"
        placeholder="Enter Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={postData}>Post Data and Display Headers</button>
      {headers && (
        <div>
          <h2>Received Headers:</h2>
          <pre>{headers}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiData;
