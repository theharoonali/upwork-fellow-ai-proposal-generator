import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import TemplateCard from "../components/templateCard";
import Span from "../components/span";

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

  return (
    <>
      <div>
        <Header
          onClick={onClickBack}
          backDisable={step === 0}
          onClickSettings={onClickSettings}
        />
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f7f7f7",
            height: "450px",
          }}
        >
          {step === 0 && (
            <div className="main-section">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <TemplateCard onClick={onGenerateProposal} />
                <TemplateCard onClick={onGenerateProposal} />
              </div>
              <div>
                <Span text={"1/2 Templates created"} />
                <Button text="Create Template" onClick={onCreateTemplate} />
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="main-section">
              <div className="sub-main-section">Create template fields</div>
              <div>
                <Button text="Save Template" onClick={onSaveTemplate} />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="main-section">
              <div className="sub-main-section">Generate Proposal</div>
              <div>
                <Button text="Regenerate" />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="main-section">
              <div className="sub-main-section">Settings</div>
              <div>
                <Button text="Save" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
