import { Button, Card, CardActionArea, CardActions, CardContent, Container, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const css = {
  wrapper: [styles.Layout, styles.darkTheme].join(' '),
};

function TemplateCard(props:any) {
  return (
    <Card className={styles.card}>
      <Link className={styles.defaultLink} to={props.link}>
      <CardActionArea className={styles.bgGray}>
        {/* <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={styles.text}>
          {props.label}
          </Typography>
          {/* <Typography component="p">
          </Typography> */}
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}

const Home: React.FC = () => (
  <div className={css.wrapper}>
    <Container className={styles.padding}>
      <TemplateCard link="MyProjects" label="My Projects"/>
      <TemplateCard link="" label="Statistics"/>
    </Container>
  </div>
);

export default Home;
