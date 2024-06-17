import React, { useState } from "react";
import Button from "../components/button";
import Span from "../components/span";

function Settings({ onClick }) {
  const [formData, setFormData] = useState({
    api: localStorage.getItem("apiKeyUpworkFellow") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("apiKeyUpworkFellow", formData.api);
    onClick();
  };

  const openAPIDocs = () => {
    const apiDocsURL = process.env.REACT_APP_OPENAI_DOC_URL;
    window.open(apiDocsURL, "_blank");
  };
console.log(process.env.REACT_APP_OPENAI_DOC_URL)
  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          <input
            type="text"
            name="api"
            placeholder="API KEY*"
            value={formData.api}
            onChange={(e) => handleChange(e)}
          />
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              cursor: "pointer",
            }}
            onClick={openAPIDocs}
          >
            <Span text={"Click here to see OpenAI API Docs."} />
          </span>
        </div>
        <div>
          <Button text="Save" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default Settings;
