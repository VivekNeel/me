// @flow

import React from 'react';

import {
  Chip,
} from '@material-ui/core';

import {
  withStyles,
} from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    minWidth: 60,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.textGray.main,
  },
});

type Classes = {
  root: string,
  media: string
}
type Props = {
  classes: Classes,
  label: string
}

const Stack = (props: Props) => {
  const { classes, label } = props;

  return (
    <Chip
      classes={{ root: classes.root }}
      label={label}
    />
  );
};
export default withStyles(styles)(Stack);
