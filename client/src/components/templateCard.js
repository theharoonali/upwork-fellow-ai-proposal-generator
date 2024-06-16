import React from "react";
import deleteIcon from "../assets/delete.svg";

const TemplateCard = ({ onClick }) => {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#515151",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Software Engineering
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            <div
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Edit
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={deleteIcon} alt="back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
