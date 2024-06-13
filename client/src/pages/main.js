import Header from "../components/header";
import Button from "../components/button";
import TemplateCard from "../components/templateCard";

function Main() {
  
  const onClick = (data) => {
    console.log(data)
  }
  
  return (
    <>
      <div style={{ height: "700px", width: "550px" }}>
        <Header />
        <div
          style={{
            height: "540px",
            padding: "40px",
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
          <TemplateCard />  

          <Button text="Create Templates" onClick = {onClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
