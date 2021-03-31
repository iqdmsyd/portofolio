import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "./components/Header";
import GreetingCard from "./components/GreetingCard";
import ProjectCard from "./components/ProjectCard";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

import projects from "./api/projects.json";

const useStyles = makeStyles((theme) => ({
  main: {
    borderLeft: "1px solid #D3D3D3",
    borderRight: "1px solid #D3D3D3",
    marginTop: "60px",
    minHeight: "calc(100vh - 60px)",
  },
}));

function App() {
  const theme = useTheme();
  const classes = useStyles();
  const projectList = projects
    .map((p) => {
      const newDateFormat = moment(p.lastUpdated).format("MMM D");
      return { ...p, lastUpdated: newDateFormat };
    })
    .reverse();

  const noBlog = (
    <Typography variant="body1" align="center" style={{ padding: "24px 0" }}>
      No blog post found.
    </Typography>
  );
  return (
    <Router>
      <div className="App">
        <Header />
        <Grid container>
          {useMediaQuery(theme.breakpoints.up("sm")) && (
            <Grid item xs={12} sm={4} md={3}>
              <SidebarLeft />
            </Grid>
          )}
          <Grid item xs={12} sm={8} md={6} className={classes.main}>
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <>
                    <GreetingCard />
                    {projectList.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </>
                )}
              />
              <Route path="/blog" exact component={() => noBlog} />
            </Switch>
            {useMediaQuery(theme.breakpoints.down("sm")) && <SidebarRight />}
          </Grid>
          {useMediaQuery(theme.breakpoints.up("md")) && (
            <Grid item xs={12} md={3}>
              <SidebarRight />
            </Grid>
          )}
        </Grid>
      </div>
    </Router>
  );
}

export default App;
