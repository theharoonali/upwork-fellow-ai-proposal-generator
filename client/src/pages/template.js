import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import TemplateCard from "../components/templateCard";
import Span from "../components/span";

function Template({ onClick }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    template: "",
    title: "",
    experience: "",
    description: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const onSaveTemplate = () => {
    onClick();
  };

  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="template"
            placeholder="Template Name* (e.g. Software Engineer)"
            value={formData.template}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="number"
            name="experience"
            placeholder="Experience in Years"
            value={formData.experience}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Job Detail / Stack used / Add portfolio Links"
            value={formData.description}
            onChange={handleChange}
          />
          <textarea
            name="instructions"
            placeholder="Custom Instruction for AI"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button text="Save Template" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default Template;
