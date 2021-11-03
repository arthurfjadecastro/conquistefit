import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "rgba(0,57,186,0.80)"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialog: {
    width: 1200
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Persons =  [
  {
    name: "Lana Renk",
    src: "/img/LANA.svg",
    pts: 25
  },
  {
    name: "Marciano Freitas",
    src: "/img/MARCIANO.svg",
    pts: 22
  },
  {
    name: "Beth",
    src: "/img/BETH.svg",
    pts: 21
  },
  {
    name: "Ramon Cachoeira",
    src: "/img/RAMON.svg",
    pts: 19
  },
  {
    name: "Joao Victor",
    src: "/img/JOAO.svg",
    pts: 16
  },
  {
    name: "Ana Carolina",
    src: "/img/CAROL.svg",
    pts: 14
  },
  {
    name: "Dayana",
    src: "/img/DAYANA.svg",
    pts: 16
  },
  {
    name: "Arthur",
    src: "/img/ARTHUR.svg",
    pts: 14
  },
  {
    name: "Walmar",
    src: "/img/WALMAR.svg",
    pts: 14
  },
  {
    name: "Rafaela",
    src: "/img/RAFAELA.svg",
    pts: 12
  },
  {
    name: "Fernanda",
    src: "/img/FERNANDA.svg",
    pts: 11
  },
]



export default function Ranking({open, handleClose}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog  fullWidth PaperProps={{
        style: {
          maxWidth: "md",
        },
        variant: "outlined"
      }}  open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              SR2637 - BRASÍLIA SUL
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {Persons.map(({ name, src, pts }, index) => {
            return (
              <>
                <ListItem >
                  <Grid container justifyContent={"space-between"} xs={12} lg={12} xl={12} md={12} sm={12}>
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Avatar   style={{width:  60, height: 60, padding: 4, backgroundColor: "rgba(255,109,0,.60)"}}>
                            <img style={{width: 60,     boxShadow: "0px -3px 16px 2px rgb(0 0 0 / 62%)", borderRadius: "50%"}} src={src}/>
                          </Avatar>
                        </Grid>
                        <Grid item>
                          <ListItemText primary={name} secondary={pts + "pts"} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {index === 0 &&
                      <Grid item>
                        <img style={{width: 60}} src={"/img/1colocado.svg"}/>
                      </Grid>
                    }
                    {index === 1 &&
                    <Grid item>
                      <img style={{width: 60}} src={"/img/2colocado.svg"}/>
                    </Grid>
                    }
                    {index === 2 &&
                    <Grid item>
                      <img style={{width: 60}} src={"/img/3colocado.svg"}/>
                    </Grid>
                    }
                  </Grid>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Dialog>
    </div>
  );
}