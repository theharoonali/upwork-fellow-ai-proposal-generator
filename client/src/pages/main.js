import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Button from "../components/button";
import TemplateCard from "../components/templateCard";
import Span from "../components/span";
import Template from "./template";
import Settings from "./settings";
import Generate from "./generate";
import Welcome from "../components/welcome";

function Main() {
  const [step, setStep] = useState(0);
  const [templates, setTemplates] = useState([]);
  const [editTemplate, setEditTemplate] = useState([]);
  const [createProposal, setCreateProposal] = useState([]);
  const [checkAPI, setCheckAPI] = useState(false);

  useEffect(() => {
    const storedTemplates = localStorage.getItem("templates");
    const apiKey = localStorage.getItem("apiKeyUpworkFellow");

    if (storedTemplates) {
      setTemplates(JSON.parse(storedTemplates));
    }
    setEditTemplate([]);

    setCheckAPI(!!apiKey);
  }, [step]);

  const onCreateTemplate = () => {
    setStep(1);
  };

  const onClickBack = () => {
    setStep(0);
  };

  const onClickSettings = () => {
    setStep(3);
  };

  const onGenerateTemplate = (id) => {
    const data = templates.find((template) => template.id === id);
    setCreateProposal(data);
    if (checkAPI) {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const getTitle = () => {
    switch (step) {
      case 0:
        return "Templates";
      case 1:
        return "Create Template";
      case 2:
        return "Generate Proposal";
      case 3:
        return "Settings";
      default:
        return "Templates";
    }
  };

  const handleDeleteTemplate = (id) => {
    const updatedTemplates = templates.filter((template) => template.id !== id);
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
  };

  const handleEditTemplate = (id) => {
    const data = templates.find((template) => template.id === id);
    setEditTemplate(data);
    setStep(1);
  };

  return (
    <>
      <div>
        <Header
          onClick={onClickBack}
          backDisable={step === 0}
          onClickSettings={onClickSettings}
          title={getTitle()}
        />
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f7f7f7",
            height: "100%",
            minHeight: "450px",
          }}
        >
          {step === 0 && (
            <div className="main-section">
              <div className="sub-main-section">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    title={template.template}
                    id={template.id}
                    onDelete={handleDeleteTemplate}
                    onEdit={handleEditTemplate}
                    onClick={onGenerateTemplate}
                  />
                ))}
              </div>
              {templates.length === 0 && <Welcome />}

              <div>
                <div></div>
                <Span text={`${templates.length}/2 Templates created`} />
                <Button
                  text="Create Template"
                  onClick={onCreateTemplate}
                  disable={templates.length >= 2}
                />
              </div>
            </div>
          )}

          {/* Create template */}
          {step === 1 && (
            <Template onClick={onClickBack} editTemplate={editTemplate} />
          )}

          {/* Generate Proposal */}
          {step === 2 && <Generate onClick={onClickBack} createProposal={createProposal} />}

          {/* Settings */}
          {step === 3 && <Settings onClick={onClickBack} />}
        </div>
      </div>
    </>
  );
}

export default Main;
