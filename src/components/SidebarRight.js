import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import libraries from "../api/libraries.json";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "60px",
    minHeight: "fit-content",
    paddingTop: "24px",
    paddingBottom: "24px",
  },
  margin: {
    borderTop: "1px solid #DEDEDE",
    borderBottom: "1px solid #DEDEDE",
  },
}));

const SidebarRight = () => {
  const classes = useStyles();
  const [libs, setLibs] = useState([]);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    setLibs(libraries.slice(0, 3));
  }, []);

  const handleClickMore = () => {
    setLibs(libraries);
    setShowLess(true);
  };

  const handleClickLess = () => {
    setLibs(libraries.slice(0, 3));
    setShowLess(false);
  };

  return (
    <Container id="right-sidebar" className={classes.root}>
      <Typography variant="h5">libraries</Typography>
      <Typography variant="body2">Stack and libs i used the most</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {libs.map((lib) => (
          <ListItem
            button
            key={lib.repos}
            component="a"
            href={lib.url}
            referrerPolicy="no-referrer"
            target="_blank"
            className={classes.margin}
          >
            <ListItemIcon>
              <img src={lib.icon} alt={lib.name} />
            </ListItemIcon>
            <ListItemText
              primary={lib.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {lib.repos}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
      {!showLess && (
        <Button variant="text" color="primary" onClick={handleClickMore}>
          show more
        </Button>
      )}
      {showLess && (
        <Button variant="text" color="primary" onClick={handleClickLess}>
          show less
        </Button>
      )}
    </Container>
  );
};

export default SidebarRight;
