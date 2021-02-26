import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const contenido =  {
  	"description": "some description text ",
  	"responsible": {
  		"name": "Santiago Carrillo",
  		"email": "sancarbar@gmail"
  	},
  	"status": "ready",
  	"dueDate": 156464645646
  }

  return (
    <div> 
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {contenido.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contenido.status}  -   {new Date(contenido.dueDate).toLocaleDateString()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contenido.responsible.name}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}