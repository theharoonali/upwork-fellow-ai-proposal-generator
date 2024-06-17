import React from "react";
import deleteIcon from "../assets/delete.svg";

const TemplateCard = ({ onClick, onDelete, title, id, onEdit }) => {
  const handleEdit = () => {
    onEdit(id);
  };
  const handleOnClick = () => {
    onClick(id);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <div className="card" onClick={handleOnClick}>
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
            {title}
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
              onClick={(e) => {
                e.stopPropagation();
                handleEdit();
              }}
            >
              Edit
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              <img src={deleteIcon} alt="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
