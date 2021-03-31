import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProfileCard from "./ProfileCard";
import MenuCard from "./MenuCard";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "60px",
    minHeight: "fit-content",
    paddingTop: "24px",
    paddingBottom: "24px",
  },
}));

const SidebarLeft = () => {
  const classes = useStyles();

  return (
    <Container id="left-sidebar" className={classes.root}>
      <ProfileCard />
      <MenuCard />
    </Container>
  );
};

export default SidebarLeft;
