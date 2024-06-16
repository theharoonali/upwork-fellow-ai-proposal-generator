import React, { useState } from "react";

const Form = () => {
  const [response, setResponse] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        "https://express-app-typescript.vercel.app/test"
      );
      if (!response.ok) {
        throw new Error("Failed!");
      }
      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div style={{ minWidth: "500px", padding: "14px", minHeight: "500px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
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
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea-height"
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Backend Check:</h3>
      <button onClick={handleFetchData}>Click to check</button>
      <p>{response ? response : "Backend API not working"}</p>
    </div>
  );
};

export default Form;
