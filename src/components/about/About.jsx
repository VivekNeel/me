// @flow
import React from 'react';
import {
  Box,
  Container,
  useMediaQuery,
  Slide,
  Typography,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';
import Skills from './Skills';

const styles = (theme) => ({
  banner: {
    width: 500,
    heigth: 500,
  },
  container: {
    marginTop: theme.spacing(4),
    zIndex: 1,
    height: '100vh',
  },
  about: {
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
  },
});

type Classes = {
  banner: string,
  container: string,
  about: string
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
          height="100%"
          flexDirection={smDown ? 'column' : 'row'}
          justifyContent={smDown ? 'center' : 'space-between'}
          alignItems="center"
        >
          <Box mr={5} textAlign="center">
            <Typography variant="subtitle1" classes={{ root: classes.about }}>
              I mostly build mobile and web applications. I have 5 years of experience working with
              react & react native.
            </Typography>
          </Box>
          <Skills />
        </Box>
      </Container>
    </Slide>
  );
};

export default withStyles(styles)(Hero);
