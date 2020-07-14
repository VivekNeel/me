// @flow

import React from 'react';
import {
  Box,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  Twitter,
  Linkedin,
  Github,
} from 'mdi-material-ui';

import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  divider: {
    maxHeight: 200,
    backgroundColor: theme.palette.textGray.dark,
    width: 2,
  },
  email: {
    transform: 'rotate(90deg)',
    color: theme.palette.textGray.main,
    marginBottom: theme.spacing(14),
  },
  icon: {
    color: theme.palette.textGray.main,
    '&:hover': {
      color: theme.palette.textGray.dark,
    },
  },
});

type Classes = {
  divider: string,
  email: string,
  icon: string
}

type Props = {
  classes: Classes
}

const iconMap = {
  linkedln: <Linkedin />,
  twitter: <Twitter />,
  github: <Github />,
};
const Bottom = (props: Props) => {
  const { classes } = props;
  return (
    <Box
      position="absolute"
      width={1}
      height={1}
      bottom={0}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width={1}
        height={1}
      >
        <Box display="flex" ml={8} flexDirection="column" alignItems="center" justifyContent="flex-end">
          <Box mb={4}>
            {['linkedln', 'twitter', 'github'].map((icon) => (
              <a alt="icon" href="/">
                <Box mb={1} className={classes.icon}>
                  {iconMap[icon]}
                </Box>
              </a>
            ))}
          </Box>
          <Divider classes={{ root: classes.divider }} orientation="vertical" />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
          <Typography classes={{ root: classes.email }}>vivek2neel@gmail.com</Typography>
          <Divider classes={{ root: classes.divider }} orientation="vertical" />
        </Box>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Bottom);
