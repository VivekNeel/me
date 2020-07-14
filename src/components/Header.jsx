// @flow
import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import NavigationItem from './NavigationItem';

const styles = (theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  },
  appbar: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'TitilliumWeb',
    fontSize: 24,
  },
  name: {
    fontFamily: 'TitilliumWeb',
    color: theme.palette.primary.main,
    fontSize: 24,
  },
});

type Classes = {
  toolbar: string,
  appbar: string,
  text: string,
  name: string
}

type Props = {
  classes: Classes,
  handleNavigation: (index: number) => void
}
const Header = (props: Props) => {
  const { classes, handleNavigation } = props;
  return (
    <AppBar
      classes={{ colorPrimary: classes.appbar }}
      elevation={0}
      position="fixed"
    >
      <Container maxWidth="md">
        <Toolbar classes={{ root: classes.toolbar }}>
          <Box fontFamily="TitilliumWeb">
            <Typography component="div" className={classes.text}>
              {'<'}
              <Typography className={classes.name} display="inline">Vivek</Typography>
              <Typography className={classes.text} display="inline">{'/>'}</Typography>
            </Typography>
          </Box>
          <NavigationItem handleNavigation={handleNavigation} />
        </Toolbar>
      </Container>

    </AppBar>
  );
};

export default withStyles(styles)(Header);
