import back from "../assets/back.svg";
import settings from "../assets/settings.svg";

function Header({ onClick, backDisable, onClickSettings, title }) {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "#36aa55",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {!backDisable && (
        <div
          className="header-icon"
          onClick={onClick}
          style={{
            position: "absolute",
            left: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={back} alt="back" />
        </div>
      )}

      <div
        style={{
          color: "#ffffff",
          fontSize: "16px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {title}
      </div>

      <div
        className="header-icon"
        onClick={onClickSettings}
        style={{
          position: "absolute",
          right: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={settings} alt="settings" />
      </div>
    </div>
  );
}

export default Header;
