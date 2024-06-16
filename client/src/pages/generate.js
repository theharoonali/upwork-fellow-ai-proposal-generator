import React, { useState } from "react";
import Button from "../components/button";

function Generate({ onClick }) {
  const [formData, setFormData] = useState({
    proposal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    onClick();
  };

  const isSubmitDisabled = formData.proposal === "";

  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          <textarea
            type="text"
            name="proposal"
            placeholder="Proposal"
            value={formData.proposal}
            onChange={(e) => handleChange(e)}
            className="textarea-height-2"
          />
        </div>
        <div>
          <Button
            text="Generate"
            onClick={handleSubmit}
            disable={isSubmitDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default Generate;
