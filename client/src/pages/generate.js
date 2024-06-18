import React, { useState } from "react";
import Button from "../components/button";
import Loader from "../components/loader";
import copy from "copy-to-clipboard";

function Generate({ onClick, createProposal }) {
  const [formData, setFormData] = useState({
    proposal: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [text, setText] = useState("Copy to clipboard");
  const apiKey = localStorage.getItem("apiKeyUpworkFellow");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      createProposal,
      proposal: formData.proposal,
      apiKey,
    };

    try {
      const url = process.env.REACT_APP_PROPOSAL_API_URL;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

    setLoading(false);
    // onClick();
  };

  const isSubmitDisabled = formData.proposal === "";

  const handleCopy = () => {
    const data = response.response.replace(/<\/?br\s?\/?>/g, "");
    copy(data);
    setText("Copied 🙌");

    setTimeout(() => {
      setText("Copy to clipboard");
    }, 2000);
  };

  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          {loading ? (
            <div
              style={{
                display: "flex",
                height: "0px",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Loader />
            </div>
          ) : response ? (
            <div
              className="response"
              dangerouslySetInnerHTML={{ __html: response?.response || "" }}
            ></div>
          ) : (
            <textarea
              type="text"
              name="proposal"
              placeholder="Client's Job Description"
              value={formData.proposal}
              onChange={(e) => handleChange(e)}
              className="textarea-height-2"
            />
          )}
        </div>
        <div>
          {response ? (
            <Button text={text} onClick={handleCopy} />
          ) : (
            <Button
              text="Generate"
              onClick={handleSubmit}
              disable={isSubmitDisabled || loading}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Generate;
