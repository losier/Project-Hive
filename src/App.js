import * as React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      
      }}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
