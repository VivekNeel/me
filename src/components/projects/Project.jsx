// @flow
import React from 'react';
import {
  Container,
  Grow,
  Grid,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';
import ProjectCard from './ProjectCard';
import {
  projects,
} from './utils';

const styles = (theme) => ({
  banner: {
    width: 500,
    heigth: 500,
  },
  container: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(10),
    zIndex: 1222,
  },
});

type Classes = {
  banner: string,
  container: string
}

type Props = {
  classes: Classes
}
const Hero = (props: Props) => {
  const { classes } = props;
  return (
    <Grow in direction="down" timeout={600}>
      <Container
        classes={{ root: classes.container }}
        maxWidth="md"
      >
        <Grid spacing={2} container justify="center">
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} md={4} sm={6}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grow>
  );
};

export default withStyles(styles)(Hero);
