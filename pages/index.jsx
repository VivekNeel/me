// @flow
import React from 'react';
import {
  Box,
  Slide,
} from '@material-ui/core';
import Hero from '../src/components/Hero';
import Header from '../src/components/Header';
import Bottom from '../src/components/Bottom';
import About from '../src/components/about/About';

const Index = () => {
  const [navigationCounter, setNavigationCounter] = React.useState(0);
  const navigations = [<Hero />, <About />];

  const handleNavigation = (index) => {
    setNavigationCounter(index);
  };
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      bgcolor="secondary.main"
      flexDirection="column"
      position="relative"
    >
      <Header handleNavigation={handleNavigation} />
      {navigations[navigationCounter]}
      <Bottom />
    </Box>
  );
};

export default Index;
