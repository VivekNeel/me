// @flow
import React from 'react';
import {
  Box, Button, IconButton, Hidden,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import {
  HomeOutline,
  InformationOutline,
  LaptopMac,
} from 'mdi-material-ui';

const styles = (theme) => ({
  text: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
    color: theme.palette.background.default,
  },
});

type Classes = {
  text: string
}

const iconMap = {
  Home: <HomeOutline />,
  About: <InformationOutline />,
  Projects: <LaptopMac />,
};
type Props = {
  classes: Classes,
  handleNavigation: (index: number) => void
}
const NavigationItem = (props: Props) => {
  const { classes, handleNavigation } = props;
  return (
    <Box display="flex">
      {['Home', 'About', 'Projects'].map<any>((item, index) => (
        <React.Fragment key={item}>
          <Hidden smDown>
            <Button
              className={classes.text}
              onClick={() => handleNavigation(index)}
            >
              {item}
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.text}
              onClick={() => handleNavigation(index)}
            >
              {iconMap[item]}
            </IconButton>
          </Hidden>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default withStyles(styles)(NavigationItem);
