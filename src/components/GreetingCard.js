import { useState } from "react";

import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    // border: "1px solid black",
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "24px 0",
    position: "relative",
  },
  hidden: {
    display: "none",
  },
  close: {
    position: "absolute",
    top: "4px",
    right: "4px",
  },
}));

const GreetingCard = () => {
  const classes = useStyles();

  const [closeGreetings, setCloseGreetings] = useState(false);

  const handleClose = () => {
    setCloseGreetings(true);
  };

  return (
    <div className={classes.container}>
      <Paper
        elevation={3}
        className={closeGreetings ? classes.hidden : classes.root}
      >
        <Typography variant="h5">Hello!</Typography>
        <Typography>
          I am a computer science fresh graduate with passion in web
          development. I like to craft the frontend, and construct the backend.
          Feel free to take a look at my projects below. I am available 24/7 at{" "}
          <b>iamsuayyad@gmail.com</b>.
        </Typography>
        <Typography>Lets meetup!</Typography>
        <Grid container>
          <IconButton
            href="https://www.twitter.com/iqdmsyd"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <TwitterIcon htmlColor="white" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/iqdmsyd"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <InstagramIcon htmlColor="white" />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/iqdammusayyad"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <FacebookIcon htmlColor="white" />
          </IconButton>
          <IconButton
            href="https://www.github.com/iqdmsyd"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <GitHubIcon htmlColor="white" />
          </IconButton>
          <IconButton className={classes.close} onClick={handleClose}>
            <CancelIcon htmlColor="white" />
          </IconButton>
        </Grid>
      </Paper>
    </div>
  );
};

export default GreetingCard;
