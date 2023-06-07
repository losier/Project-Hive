import * as React from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Navbar />
        <div
          style={{
            marginTop: "5rem", // Add margin-top to create space below the navbar
            height: "calc(100vh - 8rem)", // Set the height of the container
            overflow: "auto", // Enable scrolling if content exceeds the height
          }}
        >
          <CardContainer />
        </div>
      </div>
    </>
  );
}

export default App;
