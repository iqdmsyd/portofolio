import React, { useState } from "react";
import clsx from "clsx";

import {
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  Drawer,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import SidebarLeft from "./SidebarLeft";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0px",
    maxWidth: "1200px",
    zIndex: "2",
  },
  center: {
    position: "relative",
    borderLeft: "1px solid #D3D3D3",
    borderRight: "1px solid #D3D3D3",
    borderBottom: "1px solid #D3D3D3",
    height: "60px",
    backgroundColor: "white",
  },
  collapseLeft: {
    visibility: "hidden",
    position: "absolute",
    left: "0px",
    [theme.breakpoints.down("xs")]: {
      visibility: "visible",
    },
  },
  collapseRight: {
    visibility: "hidden",
    position: "absolute",
    right: "12px",
    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
    },
  },
  padding: {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
}));

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const DrawerSidebarLeft = (anchor) => (
    <div
      style={{ width: "300px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SidebarLeft />
    </div>
  );

  return (
    <header>
      <Grid container justify="center" className={classes.root}>
        {useMediaQuery(theme.breakpoints.up("sm")) && (
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            sm={4}
            md={3}
            className={classes.padding}
          ></Grid>
        )}

        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={8}
          md={6}
          className={classes.center}
        >
          <IconButton
            className={classes.collapseLeft}
            onClick={toggleDrawer("left", true)}
          >
            <ArrowRightIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {DrawerSidebarLeft("left")}
          </Drawer>
          <Typography variant="h5">Iqdmsyd.</Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.collapseRight}
          >
            <IconButton aria-label="toggle theme">
              <Brightness4Icon htmlColor="black" />
            </IconButton>
            <IconButton
              aria-label="Iqdam's github page"
              component="a"
              href="https://www.github.com/iqdmsyd"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <GitHubIcon htmlColor="black" />
            </IconButton>
          </Box>
        </Grid>

        {useMediaQuery(theme.breakpoints.up("md")) && (
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            md={3}
            className={clsx(classes.padding, classes.right)}
          >
            <IconButton aria-label="toggle theme">
              <Brightness4Icon htmlColor="black" />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              component="a"
              href="https://www.github.com/iqdmsyd"
              referrerPolicy="no-referrer"
              target="_blank"
              color="primary"
              aria-label="Iqdam's github page"
              startIcon={<GitHubIcon htmlColor="white" />}
            >
              My Github
            </Button>
          </Grid>
        )}
      </Grid>
    </header>
  );
};

export default Header;
