import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import TemplateCard from "../components/templateCard";
import Span from "../components/span";
import Template from "./template";
import Settings from "./settings";
import Generate from "./generate";

function Main() {
  const [step, setStep] = React.useState(0);

  const onCreateTemplate = () => {
    setStep(1);
  };

  const onClickBack = () => {
    setStep(0);
  };

  const onClickSettings = () => {
    setStep(3);
  };

  const onSaveTemplate = () => {
    setStep(0);
  };

  const onGenerateProposal = () => {
    setStep(2);
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
                <TemplateCard onClick={onGenerateProposal} />
                <TemplateCard onClick={onGenerateProposal} />
              </div>
              <div>
                <Span text={"1/2 Templates created"} />
                <Button text="Create Template" onClick={onCreateTemplate} />
              </div>
            </div>
          )}

          {/* Create template */}
          {step === 1 && <Template onClick={onSaveTemplate} />}

          {/* Generate Proposal */}
          {step === 2 && <Generate onClick={onClickBack} />}

          {/* Settings */}
          {step === 3 && <Settings onClick={onClickBack} />}
        </div>
      </div>
    </>
  );
}

export default Main;
