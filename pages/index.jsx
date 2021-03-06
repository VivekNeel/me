// @flow
import React from 'react';
import {
  Box,
} from '@material-ui/core';
import Hero from '../src/components/Hero';
import Header from '../src/components/Header';
import Bottom from '../src/components/Bottom';
import About from '../src/components/about/About';
import Project from '../src/components/projects/Project';

const Index = () => {
  const [navigationCounter, setNavigationCounter] = React.useState(0);
  const navigations = [<Hero />, <About />, <Project />];

  const handleNavigation = (index) => {
    setNavigationCounter(index);
  };
  return (
    <Box
      height={1}
      width="100%"
      display="flex"
      bgcolor="secondary.main"
      flexDirection="column"
      position="relative"
    >
      <Header
        navigationCounter={navigationCounter}
        handleNavigation={handleNavigation}
      />
      {navigations[navigationCounter]}
      <Bottom />
    </Box>
  );
};

export default Index;
