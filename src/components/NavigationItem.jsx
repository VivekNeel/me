// @flow
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  text: {
    marginRight: theme.spacing(2),
    color: theme.palette.background.default,
  },
});

type Classes = {
  text: string
}

type Props = {
  classes: Classes,
  handleNavigation: (index: number) => void
}
const NavigationItem = (props: Props) => {
  const { classes, handleNavigation } = props;
  return (
    <Box display="flex">
      {['Home', 'About', 'Projects'].map<any>((item, index) => (
        <Button
          className={classes.text}
          key={item}
          onClick={() => handleNavigation(index)}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default withStyles(styles)(NavigationItem);
