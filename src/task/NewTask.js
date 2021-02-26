import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NoteIcon from '@material-ui/icons/Note';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <NoteIcon />
                        </Avatar>
                        <Typography variant="h2">New Task</Typography>
                        <form className="form" >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <Input id="description" name="description" autoComplete="description" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="responsible">Responsible</InputLabel>
                                <Input
                                    name="responsible"
                                    type="responsible"
                                    id="responsible"
                                    autoComplete="responsible"
                                />
                            </FormControl>

                            <br/>
                            <br/>
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Create
                            </Button>

                            <br/>
                            <br/>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="submit"
                            >
                                Cancel
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
 
  );
}