import { Container } from '@material-ui/core';
import styles from './MyProjects.module.scss';
import React from 'react';


export default function MyProjects() {
  return (
    <div className={[styles.Layout, styles.darkTheme].join(' ')}>
      <Container className={styles.padding}>
        <div>asdf</div>
      </Container>
    </div>
  );
}
