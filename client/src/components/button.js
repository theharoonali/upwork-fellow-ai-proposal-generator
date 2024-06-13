function Button({text, onClick = () => {}, navigate = null}) {
  
  const handleClick = () => {
    onClick(navigate ? navigate : "console")
  }
  
    return (
    <>
      <button
              style={{
                height: "40px",
                borderRadius: "5px",
                backgroundColor: "#36aa55",
                color: "white",
                border:"none",
                cursor: "pointer"
              }}

              onClick = {handleClick}
            >
              {text}
            </button>
    </>
  );
}

export default Button;
