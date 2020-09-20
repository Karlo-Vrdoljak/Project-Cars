import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Items.module.scss';
import { Button } from '@material-ui/core';

const Items: React.FC = () => (
  <>
    {[
      {
        link: '/',
        label: 'home',
      },
      {
        link: '/about',
        label: 'About',
      },
    ].map((item) => (
      <Link className={classes.link} to={item.link} key={item.link}>
        <Button color="inherit">{item.label}</Button>
      </Link>
    ))}
  </>
);

export default Items;
