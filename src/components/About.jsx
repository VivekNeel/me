// @flow
import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';

const styles = (theme) => ({
  hi: {
    color: theme.palette.textGray.dark,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 2,
  },
  im: {
    color: theme.palette.background.default,
    fontWeight: 700,
    fontFamily: 'TitilliumWeb',
    letterSpacing: 2,
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontFamily: 'TitilliumWeb',
    letterSpacing: 2,
  },
  whatim: {
    color: theme.palette.background.default,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
  },
  lead: {
    color: theme.palette.background.default,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
    fontSize: '1rem',
  },
  work: {
    color: theme.palette.primary.main,
    fontFamily: 'TitilliumWeb',
  },
  resume: {
    minWidth: 140,
  },
  contact: {
    minWidth: 140,
    backgroundColor: '#294672',
  },
});

type Classes = {
  hi: string,
  name: string,
  whatim: string,
  resume: string,
  contact: string,
  im: string,
  lead: string,
  work: string
}

type Props = {
  classes: Classes
}

const Hero = (props: Props) => {
  const { classes } = props;
  return (

    <Box minWidth={300}>
      <Typography className={classes.hi}>
        Hi there,
      </Typography>
      <Typography variant="h4" component="div" className={classes.im}>
        I&apos;m
        <Typography
          classes={{ root: classes.name }}
          variant="h4"
          display="inline"
        >
          {' '}
          VivekNeel
        </Typography>
      </Typography>
      <Typography variant="h5" className={classes.whatim}>
        I&apos;m a Web/Mobile developer
      </Typography>
      <Typography variant="h5" className={classes.lead}>
        Frontend Lead @
        <a href="https://www.memorangapp.com/" className={classes.work}>Memorang</a>
      </Typography>
      <Box
        display="flex"
        mt={4}
        flex-direction="row"
        align="center"
        justifyContent="space-around"
      >
        <Button
          className={classes.resume}
          color="primary"
          href="https://github.com/VivekNeel/me/raw/master/src/resume.pdf?raw=true"
          variant="contained"
        >
          Resume
        </Button>
        <Button
          href="mailto:vivek2neel@gmail.com"
          className={classes.contact}
          variant="contained"
          color="secondary"
        >
          Contact me
        </Button>
      </Box>
    </Box>

  );
};

export default withStyles(styles)(Hero);
