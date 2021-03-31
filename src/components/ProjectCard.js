import React from "react";
import clsx from "clsx";

import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TelegramIcon from "@material-ui/icons/Telegram";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    borderBottom: "1px solid #D3D3D3",
    borderTop: "1px solid #D3D3D3",
    // "&:hover": {
    //   backgroundColor: "#F1F1F1",
    // },
  },
  image: {
    "& img": {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  text: {
    [theme.breakpoints.between("sm", "md")]: {
      paddingLeft: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "6px",
    },
  },
  title: {
    fontWeight: 700,
  },
  libs: {
    fontStyle: "italic",
    marginTop: "12px",
  },
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify="space-between" className={clsx(classes.root)}>
      <Grid item xs={12} sm={4} md={4} lg={6} className={classes.image}>
        <img src={project.img} alt={project.title} />
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={6} className={classes.text}>
        <Box display="flex" alignItems="center" gridGap={10}>
          <Typography variant="h6" className={classes.title}>
            {project.title}
          </Typography>
          <Typography>&bull;</Typography>
          <Typography>{project.lastUpdated}</Typography>
        </Box>
        <Box display="flex">
          <IconButton
            href={project.url}
            referrerPolicy="no-referrer"
            target="_blank"
            title="Visit app"
          >
            <TelegramIcon
              fontSize="small"
              htmlColor={theme.palette.primary.main}
            />
          </IconButton>
          <IconButton
            href={project.github}
            referrerPolicy="no-referrer"
            target="_blank"
            title="See codes"
          >
            <CodeIcon
              fontSize="small"
              htmlColor={theme.palette.secondary.main}
            />
          </IconButton>
        </Box>
        <Typography variant="body1">{project.description}</Typography>
        <Typography variant="body2" className={classes.libs}>
          libs: {project.libs.join(", ")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
