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
  title2: {
    marginLeft: theme.spacing(2),
    flex: 1,
    justifyContent:"flex-end",
    display: "flex"
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



const Persons =  [
  {
    name: "Marciano",
    src: "/img/MARCIANO.svg",
    pts: 0
  },
  {
    name: "Beth",
    src: "/img/BETH.svg",
    pts: 0
  },
  {
    name: "Lana",
    src: "/img/LANA.svg",
    pts: 0
  },
  {
    name: "Ramon",
    src: "/img/RAMON.svg",
    pts: 0
  },
  {
    name: "João",
    src: "/img/JOAO.svg",
    pts: 0
  },
  {
    name: "Carol",
    src: "/img/CAROL.svg",
    pts: 0
  },
  {
    name: "Dayana",
    src: "/img/DAYANA.svg",
    pts: 0
  },
  {
    name: "Arthur",
    src: "/img/ARTHUR.svg",
    pts: 0
  },
  {
    name: "Walmar",
    src: "/img/WALMAR.svg",
    pts: 0
  },
  {
    name: "Rafaela",
    src: "/img/RAFAELA.svg",
    pts: 0
  },
  {
    name: "Fernanda",
    src: "/img/FERNANDA.svg",
    pts: 0
  },
  {
    name: "Kerson",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Andréia",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Luciano",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Eduardo",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Juliana",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Gilberto",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Elvis",
    src: "/img/default-avatar.png",
    pts: 0
  },
  {
    name: "Bruno",
    src: "/img/default-avatar.png",
    pts: 0
  },
]

Persons.sort(function (a, b) {
  if (a.pts < b.pts) {
    return 1;
  }
  if (a.pts > b.pts) {
    return -1;
  }
  // a must be equal to b
  return 0;
});







export default function Ranking({open, handleClose}) {


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
            <Typography variant="h6" className={classes.title}>
              SR2637 - BRASÍLIA SUL
            </Typography>
            <Typography variant="body2" className={classes.title2}>
               Dias Restantes:    <b> {diffDays}</b>
            </Typography>

          </Toolbar>
        </AppBar>
        <List>
          {Persons.map(({ name, src, pts }, index) => {
            return (
              <>
                <ListItem >
                  <Grid wrap={"nowrap"} container nowrap justifyContent={"space-between"} xs={12} lg={12} xl={12} md={12} sm={12}>
                    <Grid item>
                      <Grid container spacing={2} wrap={"nowrap"}>
                        <Grid item>
                          <Avatar   style={{width:  60, height: 60, padding: 4, backgroundColor: "rgba(255,109,0,.60)"}}>
                            <img style={{width: 60, boxShadow: "0px -3px 16px 2px rgb(0 0 0 / 62%)", borderRadius: "50%"}} src={src}/>
                          </Avatar>
                        </Grid>
                        <Grid item>
                          <ListItemText secondaryTypographyProps={{style: index === 0 || index === 1 || index === 2 ? {fontWeight: "800"}:{fontWeight: "400"}}} primaryTypographyProps={{noWrap: true, style: {fontWeight: "800"}}} primary={name} secondary={pts + "pts"} />
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
                    {index >= 3 &&
                    <Grid item className={classes.gridPosition}>
                      <Typography style={{borderRadius: "16%", borderBottom: "solid", color: "rgba(155,155,155,0.85)", fontFamily:"fantasy"}}  >
                        {index+1 + "º"}
                      </Typography>

                      {/*<PeopleAltOutlined style={{borderRadius: "16%", borderBottom: "solid", color: "rgba(155,155,155,0.35)"}}/>*/}
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