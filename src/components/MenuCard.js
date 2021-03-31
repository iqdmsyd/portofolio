import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import DescriptionIcon from "@material-ui/icons/Description";
// import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "24px",
  },
  listItemIcon: {
    minWidth: "fit-content",
    marginRight: "12px",
  },
  primary: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
  },
  active: {
    "& svg, & span": {
      color: theme.palette.primary.main,
    },
  },
}));

const MenuCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();

  const [links, setLinks] = useState([
    location.pathname === "/" ? true : false,
    location.pathname === "/blog" ? true : false,
  ]);
  const changeLink = (n, path) => {
    const prevLinks = links;
    setLinks(prevLinks.map((link, idx) => (idx === n ? true : false)));
    if (window.innerWidth < theme.breakpoints.values.sm) {
      let sidebarLeft = document.getElementById("left-sidebar");
      sidebarLeft.style.visibility = "hidden";
    }
    history.push(path);
  };

  return (
    <List className={classes.root}>
      {[
        { text: "My Projects", icon: <DescriptionIcon />, path: "/" },
        { text: "Blog", icon: <BookmarkIcon />, path: "/blog" },
      ].map((item, idx) => (
        <ListItem
          key={idx}
          button
          className={links[idx] ? classes.active : ""}
          onClick={() => changeLink(idx, item.path)}
        >
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            classes={{ primary: classes.primary }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuCard;
