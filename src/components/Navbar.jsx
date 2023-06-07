import React, { useEffect, useState } from "react";
import { Avatar, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import BugReportIcon from "@mui/icons-material/BugReport";
import AddWorkDialog from "./AddWorkDialog";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import hiveLogo from "../assets/logo/bg_removed_hive.png";

const Navbar = () => {
  const theme = useTheme();
  const mediumDevices = useMediaQuery(theme.breakpoints.up("md"));
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: mediumDevices ? "1rem" : 0,
        width: mediumDevices ? "80%" : "100%",
        zIndex: 100,
        padding: mediumDevices ? "0.5rem 1.5rem" : "0.75rem",
        fontSize: "1.25rem",
        opacity: 1,
        color: "rgb(52, 71, 103)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: mediumDevices ? ".75rem" : 0,
        backdropFilter: "blur(10px)",
        transition: "top 0.3s",
        display: visible ? "block" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            style={{
              color: "var(--color-primary)",
              maxHeight: "3rem",
              maxWidth: "3rem",
            }}
            src={hiveLogo}
            alt="hive logo"
          />
          <Typography variant="h6">Project Hive</Typography>
        </div>
        <div>
          {mediumDevices ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Tooltip title="Add your work" arrow>
                <IconButton onClick={handleDialogOpen}>
                  <Avatar
                    style={{
                      color: "var(--color-black)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    <AddIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Tooltip title="Documentation" arrow>
                <IconButton
                  href="https://github.com/losier/Project-Hive#readme"
                  target="_blank"
                >
                  <Avatar
                    style={{
                      color: "var(--color-black)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    <ArticleIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub" arrow>
                <IconButton
                  href="https://github.com/losier/Project-Hive/"
                  target="_blank"
                >
                  <Avatar
                    style={{
                      color: "var(--color-black)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    <GitHubIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Tooltip title="Report/Feature request" arrow>
                <IconButton
                  href="https://github.com/losier/Project-Hive/issues/new/"
                  target="_blank"
                >
                  <Avatar
                    style={{
                      color: "var(--color-black)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    <BugReportIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <>
              <IconButton onClick={handleDrawerOpen}>
                {drawerOpen ? (
                  <CloseIcon
                    style={{
                      color: "var(--color-black)",
                      fontSize: "2rem",
                    }}
                  />
                ) : (
                  <MenuIcon
                    style={{
                      color: "var(--color-black)",
                      fontSize: "2rem",
                    }}
                  />
                )}
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItemButton onClick={handleDialogOpen}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText
                      color="var(--color-black)"
                      primary="Add your work"
                    />
                  </ListItemButton>
                  <ListItemButton
                    href="https://github.com/losier/Project-Hive#readme"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText
                      color="var(--color-black)"
                      primary="Documentation"
                    />
                  </ListItemButton>
                  <ListItemButton
                    href="https://github.com/losier/Project-Hive/"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText color="var(--color-black)" primary="GitHub" />
                  </ListItemButton>
                  <ListItemButton
                    href="https://github.com/losier/Project-Hive/issues/new/"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <BugReportIcon />
                    </ListItemIcon>
                    <ListItemText
                      color="var(--color-black)"
                      primary="Report/Feature request"
                    />
                  </ListItemButton>
                  <ListItemButton onClick={handleDrawerClose}>
                    <ListItemIcon>
                      <CloseIcon
                        style={{
                          color: "var(--color-black)",
                          fontSize: "2rem",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText color="var(--color-black)" primary="Close" />
                  </ListItemButton>
                </List>
              </Drawer>
            </>
          )}
        </div>
      </div>
      {dialogOpen && (
        <AddWorkDialog isOpen={dialogOpen} onClose={handleDialogClose} />
      )}
    </nav>
  );
};

export default Navbar;
