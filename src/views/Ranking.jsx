import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    // marginLeft: theme.spacing(2),
    fontWeight: 800,
    flex: 1,
  },
  title2: {
    // marginLeft: theme.spacing(2),
    flex: 1,
    // justifyContent:"flex-end",
    // display: "flex"
  },
  dialog: {
    width: 1200
  },
  gridPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 60,
  },
  text: {
    fontSize: 12,
    fontFamily: "Arial Black",
    color: "#686599",
    fontWeight: 400,
    textDecoration: "overline solid rgb(68, 68, 68)",
    fontStyle: "normal",
    fontVariant: "small-caps",
    textTransform: "uppercase"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Ranking({open, handleClose}) {

  let positionController = {
    points:0,
    position:0
  }

  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    fetch("https://conquiste-fit.herokuapp.com/persons").then(res => {
        if (res.ok) {
          return res.json()
        }
    }).then(jsonResponse => setInitialState(jsonResponse))
}, [])

  const finish = new Date("01/14/2022");
  const timeDiff = Math.abs(finish.getTime() - Date.now());


  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const classes = useStyles();
  return (

    <div>
      <Dialog  fullWidth PaperProps={{
        style: {
          maxWidth: "md",
        },
        variant: "elevation"
      }}  open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="Body1" className={classes.title}>
              SR - BRASÍLIA SUL
            </Typography>
            <Typography variant="caption" className={classes.title2}>
               Dias Restantes:    <b> {diffDays}</b>
            </Typography>
            <Typography variant="caption" className={classes.title2}>
              Atualizado em:    <b> {"20/11/2021"}</b>
            </Typography>

          </Toolbar>
        </AppBar>
        <List>
          {
            initialState.map(({ name, src, points }) => {
              
              if (positionController.points !== points) {
                positionController.position++
                positionController.points = points
              }

                return (
                  <>
                    <ListItem >
                      <Grid wrap={"nowrap"} container nowrap justifyContent={"space-between"} xs={12} lg={12} xl={12} md={12} sm={12}>
                        <Grid item>
                          <Grid container spacing={2} wrap={"nowrap"}>
                            <Grid item>
                              <Avatar   style={{width:  60, height: 60, padding: 4, backgroundColor: "rgba(50,90,173,.55)"}}>
                                <img style={{width: 60, height: 52, boxShadow: "0px -3px 16px 2px rgb(0 0 0 / 62%)", borderRadius: "50%"}} src={src}/>
                              </Avatar>
                            </Grid>
                            <Grid item>
                              <ListItemText secondaryTypographyProps={{style: positionController.position === 1 || positionController.position === 2 || positionController.position === 3 ? {fontWeight: "800"}:{fontWeight: "400"}}} primaryTypographyProps={{noWrap: true, style: {fontWeight: "800"}}} primary={name} secondary={points + "points"} />
                            </Grid>
                          </Grid>
                        </Grid>

                        {positionController.position === 1 &&
                        <Grid item>
                          <img style={{width: 60}} src={"/img/1colocado.svg"}/>
                        </Grid>
                        }
                        {positionController.position === 2 &&
                        <Grid item>
                          <img style={{width: 60}} src={"/img/2colocado.svg"}/>
                        </Grid>
                        }
                        {positionController.position === 3 &&
                        <Grid item>
                          <img style={{width: 60}} src={"/img/3colocado.svg"}/>
                        </Grid>
                        }
                        {positionController.position > 3 &&
                        <Grid item className={classes.gridPosition}>
                          <Typography style={{borderRadius: "16%", borderBottom: "solid", color: "rgba(155,155,155,0.85)", fontFamily:"fantasy"}}  >
                            {positionController.position+ "º"}
                          </Typography>
                        </Grid>
                        }
                      </Grid>
                    </ListItem>
                    <Divider />
                  </>
                )
              })
            })
        </List>
      </Dialog>
    </div>
  );
}