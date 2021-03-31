import React from "react";
import clsx from "clsx";

import { Avatar, Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlaceIcon from "@material-ui/icons/Place";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0 auto",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  lowercase: {
    textTransform: "lowercase",
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item xs>
          <Avatar
            src="/avatar.png"
            alt="Iqdam's avatar"
            title="Iqdam's avatar"
            className={clsx(classes.avatar, classes.large)}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h6" align="center">
            Iqdam Musayyad R.
          </Typography>
        </Grid>
        <Grid item xs>
          <Button variant="text" component="p" startIcon={<PlaceIcon />}>
            Tasikmalaya
          </Button>
          <Button
            variant="text"
            component="a"
            href="https://www.linkedin.com/in/iqdammusayyad"
            referrerPolicy="no-referrer"
            target="_blank"
            startIcon={<LinkedInIcon />}
            className={classes.lowercase}
          >
            iqdammusayyad
          </Button>
          <Button
            variant="text"
            component="a"
            href="mailto:iamusayyad@gmail.com"
            startIcon={<MailIcon />}
            className={classes.lowercase}
          >
            iamusayyad
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileCard;
