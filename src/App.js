import * as React from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  let margin;
  if (isMobile) {
    margin = "5rem";
  } else if (isTablet) {
    margin = "6rem";
  } else if (isDesktop) {
    margin = "7rem";
  }
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
            marginLeft: isDesktop ? "1rem" : "0rem",
            marginRight: isDesktop ? "1rem" : "0rem",
            marginTop: "5rem",
            height: `calc(100vh - ${margin})`,
            overflow: "auto",
          }}
        >
          <CardContainer />
        </div>
      </div>
    </>
  );
}

export default App;
