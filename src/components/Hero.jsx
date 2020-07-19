// @flow
import React from 'react';
import {
  Box,
  Container,
  useMediaQuery,
  Slide,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';
import About from './About';

const styles = (theme) => ({
  banner: {
    width: 500,
    height: 500,
  },
  container: {
    marginTop: theme.spacing(4),
    zIndex: 1,
    height: '100vh',
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
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Slide in direction="down" timeout={600}>
      <Container
        classes={{ root: classes.container }}
        maxWidth="md"
      >
        <Box
          display="flex"
          flexDirection={smDown ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <About />
          <img className={classes.banner} alt="Banner" src="/man.svg" />
        </Box>
      </Container>
    </Slide>
  );
};

export default withStyles(styles)(Hero);
