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

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
    console.log("Next Step Clicked");
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
    console.log("Previous Step Clicked");
  };

  const onClickBack = () => {
    setStep(0);
  };

  const onClickSettings = () => {
    setStep(3);
  };

  const onSaveTemplate = () => {
    console.log("tempalate Saved");
    setStep(0);
  };

  const onGenerateProposal = () => {
    setStep(2);
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <Header
          onClick={onClickBack}
          backDisable={step === 0}
          onClickSettings={onClickSettings}
        />
        {step === 0 && (
          <div
            style={{
              height: "100%",
              padding: "20px",
              backgroundColor: "#f7f7f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
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
          </div>
        )}
        {step === 1 && (
          <div
            style={{
              height: "100%",
              padding: "20px",
              backgroundColor: "#f7f7f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                Create template fields
              </div>
              <div>
                <Button text="Save Template" onClick={onSaveTemplate} />
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div
            style={{
              height: "100%",
              padding: "20px",
              backgroundColor: "#f7f7f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                Generate Proposal
              </div>
              <div>
                <Button text="Regenrate" />
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div
            style={{
              height: "100%",
              padding: "20px",
              backgroundColor: "#f7f7f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                Settings
              </div>
              <div>
                <Button text="Save" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
