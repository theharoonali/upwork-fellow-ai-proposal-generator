import back from "../assets/back.svg";
import settings from "../assets/settings.svg";

function Header({ onClick, backDisable, onClickSettings }) {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "#36aa55",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="header-icon" onClick={onClick}>
        {!backDisable && <img src={back} alt="back" />}
      </div>

      <div
        style={{
          color: "#ffffff",
          fontSize: "16px",
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Templates
      </div>
      <div className="header-icon" onClick={onClickSettings}>
        <img src={settings} alt="settings" />
      </div>
    </div>
  );
}

export default Header;
