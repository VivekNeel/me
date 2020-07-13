// @flow
import React from 'react';
import {
  Box,
} from '@material-ui/core';
import Hero from '../src/components/Hero';

const Index = () => (
  <Box
    height="100vh"
    width="100%"
    display="flex"
    bgcolor="secondary.main"
  >
    <Hero />
  </Box>
);

export default Index;
