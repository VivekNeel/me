// @flow

import React from 'react';
import {
  Box,
  Divider,
  Typography,
  Hidden,
} from '@material-ui/core';
import {
  StackOverflow,
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
  stackoverflow: <StackOverflow />,
  github: <Github />,
};

const links = [{
  title: 'linkedln',
  link: 'https://www.linkedin.com/in/vivek-neel-65585b103/',
}, {
  title: 'github',
  link: 'https://github.com/VivekNeel',
},
{
  title: 'stackoverflow',
  link: 'https://stackoverflow.com/users/3052300/vivek-neel',
}];
const Bottom = (props: Props) => {
  const { classes } = props;
  const mobileView = () => (
    <Box
      position="absolute"
      width={1}
      bottom={0}
      zIndex={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        height={1}
        width={1}
        alignItems="flex-end"
      >
        <Box display="flex" flexDirection="row">
          {links.map(({
            title,
            link,
          }) => (
            <a
              alt="icon"
              href={link}
              rel="noreferrer"
              target="_blank"
              key={title}
            >
              <Box mb={4} p={2} className={classes.icon}>
                {iconMap[title]}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
  return (
    <>
      <Hidden mdUp>
        {mobileView()}
      </Hidden>
      <Hidden smDown>
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
                {links.map(({
                  title,
                  link,
                }) => (
                  <a
                    alt="icon"
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    key={title}
                  >
                    <Box mb={1} className={classes.icon}>
                      {iconMap[title]}
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
      </Hidden>
    </>
  );
};

export default withStyles(styles)(Bottom);
