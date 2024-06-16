import React, { useState } from "react";
import Button from "../components/button";

function Template({ onClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    template: "",
    instructions: "",
    jobDetails: [{ title: "", experience: "", description: "" }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "title" || name === "experience" || name === "description") {
      const updatedJobDetails = [...formData.jobDetails];
      updatedJobDetails[index] = {
        ...updatedJobDetails[index],
        [name]: value,
      };
      setFormData({ ...formData, jobDetails: updatedJobDetails });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMore = () => {
    setFormData({
      ...formData,
      jobDetails: [
        ...formData.jobDetails,
        { title: "", experience: "", description: "" },
      ],
    });
  };

  const handleDelete = (index) => {
    const updatedJobDetails = formData.jobDetails.filter((_, i) => i !== index);
    setFormData({ ...formData, jobDetails: updatedJobDetails });
  };

  const handleSubmit = () => {
    console.log(formData);
    onClick();
  };

  const isSubmitDisabled = formData.name === "" || formData.template === "";

  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="template"
            placeholder="Template Name* (e.g. Software Engineer)"
            value={formData.template}
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="instructions"
            placeholder="Custom Instruction for AI"
            value={formData.instructions}
            onChange={(e) => handleChange(e)}
          />

          {formData.jobDetails.map((job, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: "14px", padding: "14px 0px" }}>
                  {index + 1}. Experience
                </div>
                {index === 0 ? (
                  <div
                    onClick={handleAddMore}
                    style={{
                      fontSize: "14px",
                      padding: "14px 0px",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      color: "#36aa55",
                      cursor: "pointer",
                    }}
                  >
                    Add More
                  </div>
                ) : (
                  <div
                    onClick={() => handleDelete(index)}
                    style={{
                      fontSize: "14px",
                      padding: "14px 0px",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      color: "#ED4537",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={job.title}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience in Years"
                  value={job.experience}
                  onChange={(e) => handleChange(e, index)}
                />
                <textarea
                  name="description"
                  placeholder="Job Detail / Stack used / Add portfolio Links"
                  value={job.description}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button
            text="Save Template"
            onClick={handleSubmit}
            disable={isSubmitDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default Template;
