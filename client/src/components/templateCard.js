import React from "react";

const TemplateCard = () => {
  return (
    <div>
      <div
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height: "70px",
          borderRadius: "10px",
          backgroundColor: "#eaeaea",
          padding:"10px"
        }}
      >
        <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
        <div>Software Engineering</div>
        <div style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
          <div>edit</div>
          <div>remove</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
