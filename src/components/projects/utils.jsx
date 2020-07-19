/* eslint-disable react/jsx-indent */
// @flow
import React from 'react';
import {
  IconButton,
} from '@material-ui/core';
import {
  GooglePlay,
  Apple,
  Web,
} from 'mdi-material-ui';

type ProjectData = {
  title: string,
  description: string,
  date: string,
  headerImg: *,
  contentImg: *,
  actions: *,
  stacks: string[]
}
const projects: ProjectData[] = [
  {
    title: 'Memorang Web',
    date: 'Nov 2019 - Present',
    description:
      'Memorang helps you learn faster with intelligent flashcards, quizzes, and games that adapt to what you know and how you study.',
    headerImg: '/memorang_header.svg',
    contentImg: '/memorang_content.svg',
    actions: <IconButton href="https://www.memorangapp.com/">
      <Web />
             </IconButton>,
    stacks: ['next-js', 'react', 'material-ui', 'redux', 'relay', 'appsync', 'react-relay-offline'],
  },
  {
    title: 'Memorang Mobile',
    date: 'Nov 2019 - Present',
    description:
      'Memorang helps you learn faster with intelligent flashcards, quizzes, and games that adapt to what you know and how you study.',
    headerImg: '/memorang_header.svg',
    contentImg: '/memorang_content.svg',
    actions: <>
      <IconButton href="https://www.memorangapp.com/">
        <GooglePlay />
      </IconButton>
      <IconButton href="https://www.memorangapp.com/">
        <Apple />
      </IconButton>
             </>,
    stacks: ['react', 'react-native', 'material-ui', 'redux', 'relay', 'appsync', 'react-relay-offline'],
  },
  {
    title: 'Moviebuff Mobile',
    date: 'June 2017 - Oct 2019',
    description:
      'Moviebuff helps you discover movies playing near you. Check movie releases for a chosen period, easily navigate between months/years, or pick and month and get a detailed list of movie releases by date or for the whole year!',
    headerImg: '/moviebuff_header.png',
    contentImg: '/qube-content.jpg',
    actions: <>
      <IconButton href="https://play.google.com/store/apps/details?id=com.moviebuff.android">
        <GooglePlay />
      </IconButton>
      <IconButton href="https://apps.apple.com/us/app/moviebuff/id1296305530">
        <Apple />
      </IconButton>
             </>,
    stacks: ['react', 'react-native', 'redux'],
  },
  {
    title: 'Justickets Mobile',
    date: 'June 2017 - Oct 2019',
    description:
      'Justickets offers a quick and easy way to book tickets online for current and upcoming movie releases across cities in India.',
    headerImg: '/jt-header.png',
    contentImg: '/qube-content.jpg',
    actions: <>
      <IconButton href="https://play.google.com/store/apps/details?id=in.justickets.android">
        <GooglePlay />
      </IconButton>
      <IconButton href="https://apps.apple.com/in/app/justickets-movie-tickets/id595107857">
        <Apple />
      </IconButton>
             </>,
    stacks: ['react', 'react-native', 'kotlin', 'java'],
  },
];
export type {
  ProjectData,
};
export {
  projects,
};
