import React, { useEffect, useState } from 'react';
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

export default function Ranking({ open, handleClose }) {



  const Persons = [
    // {
    //   name: "Marciano",
    //   src: "/img/MARCIANO.svg",
    //   position: null,
    //   pts: 66
    // },
    // {
    //   name: "Beth",
    //   src: "/img/BETH.svg",
    //   pts: 0,
    //   position: null
    // },
    {
      name: "Lana",
      src: "/img/LANA.svg",
      position: null,
      pts: 68
    },
    // {
    //   name: "Ramon",
    //   src: "/img/RAMON.svg",
    //   pts: 6,
    //   position: null
    // },
    // {
    //   name: "Jo??o",
    //   src: "/img/JOAO.svg",
    //   position: null,
    //   pts: 70
    // },
    // {
    //   name: "Carol",
    //   src: "/img/CAROL.svg",
    //   position: null,
    //   pts: 12
    // },
    {
      name: "Dayana",
      src: "/img/DAYANA.svg",
      position: null,
      pts: 50.7
    },
    // {
    //   name: "Arthur",
    //   src: "/img/ARTHUR.svg",
    //   position: null,
    //   pts: 16

    // },
    {
      name: "Walmar",
      src: "/img/WALMAR.svg",
      position: null,
      pts: 72.5
    },
    {
      name: "Rafaela",
      src: "/img/RAFAELA.svg",
      position: null,
      pts: 59.2
    },
    // {
    //   name: "Fernanda",
    //   src: "/img/FERNANDA.svg",
    //   position: null,
    //   pts: 50
    // },
    // {
    //   name: "Kerson",
    //   src: "/img/KERSON.svg",
    //   pts: 5,
    //   position: null
    // },
    // {
    //   name: "Andr??ia",
    //   src: "/img/ANDREA.svg",
    //   position: null,
    //   pts: 29
    // },
    // {
    //   name: "Luciano",
    //   src: "/img/LUCIANO.svg",
    //   pts: 2,
    //   position: null
    // },
    {
      name: "Eduardo",
      src: "/img/Eduardo.svg",
      position: null,
      pts: 75
    },
    // {
    //   name: "Juliana",
    //   src: "/img/default-avatar.png",
    //   position: null,
    //   pts: 29
    // },
    // {
    //   name: "Gilberto",
    //   src: "/img/default-avatar.png",
    //   pts: 0,
    //   position: null
    // },
    // {
    //   name: "Elvis",
    //   src: "/img/default-avatar.png",
    //   pts: 0,
    //   position: null
    // },
    // {
    //   name: "Bruno",
    //   src: "/img/BRUNO.svg",
    //   position: null,
    //   pts: 9

    // },
    // {
    //   name: "Marcelo",
    //   src: "/img/default-avatar.png",
    //   pts: 0,
    //   position: null
    // },
    // {
    //   name: "Sandro",
    //   src: "/img/default-avatar.png",
    //   position: null,
    //   pts: 3
    // },
    // {
    //   name: "Tassio",
    //   src: "/img/default-avatar.png",
    //   pts: 2,
    //   position: null
    // },
    // {
    //   name: "Guilherme",
    //   src: "/img/default-avatar.png",
    //   pts: 0,
    //   position: null
    // },
    // {
    //   name: "Paula",
    //   src: "/img/default-avatar.png",
    //   pts: 15,
    //   position: null
    // },
    // {
    //   name: "R??mulo",
    //   src: "/img/default-avatar.png",
    //   position: null,
    //   pts: 36
    // },
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


  let resultInterval = []


  Persons.map(({ name, src, pts, position }, index) => {
    resultInterval.push(Persons.filter(function (obj) { return obj.pts == Persons[index].pts }))
  })

  let values = resultInterval.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))



  values.map((value, index) => {
    value.map((v, i) => {
      v.position = index + 1
    })
  })





  const finish = new Date("01/14/2022");
  const timeDiff = Math.abs(finish.getTime() - Date.now());


  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const classes = useStyles();
  return (

    <div>
      <Dialog fullWidth PaperProps={{
        style: {
          maxWidth: "md",
        },
        variant: "elevation"
      }} open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="Body1" className={classes.title}>
              SR - BRAS??LIA SUL
            </Typography>
            <Typography variant="caption" className={classes.title2}>
              Dias Restantes:    <b> {"-"}</b>
            </Typography>
            <Typography variant="caption" className={classes.title2}>
              Atualizado em:    <b> {"17/02/2022"}</b>
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {
            values.map((value, index) => {
              return value.map(({ name, position, src, pts }, i) => {
                return (
                  <>
                    <ListItem >
                      <Grid wrap={"nowrap"} container nowrap justifyContent={"space-between"} xs={12} lg={12} xl={12} md={12} sm={12}>
                        <Grid item>
                          <Grid container spacing={2} wrap={"nowrap"}>
                            <Grid item>
                              <Avatar style={{ width: 60, height: 60, padding: 4, backgroundColor: "rgba(50,90,173,.55)" }}>
                                <img style={{ width: 60, height: 52, boxShadow: "0px -3px 16px 2px rgb(0 0 0 / 62%)", borderRadius: "50%" }} src={src} />
                              </Avatar>
                            </Grid>
                            <Grid item>
                              <ListItemText secondaryTypographyProps={{ style: position === 1 || position === 2 || position === 3 ? { fontWeight: "800" } : { fontWeight: "400" } }} primaryTypographyProps={{ noWrap: true, style: { fontWeight: "800" } }} primary={name} secondary={pts + "pts"} />
                            </Grid>
                          </Grid>
                        </Grid>

                        {position === 1 &&
                          <Grid item>
                            <img style={{ width: 60 }} src={"/img/1colocado.svg"} />
                          </Grid>
                        }
                        {position === 2 &&
                          <Grid item>
                            <img style={{ width: 60 }} src={"/img/2colocado.svg"} />
                          </Grid>
                        }
                        {position === 3 &&
                          <Grid item>
                            <img style={{ width: 60 }} src={"/img/3colocado.svg"} />
                          </Grid>
                        }
                        {position > 3 &&
                          <Grid item className={classes.gridPosition}>
                            <Typography style={{ borderRadius: "16%", borderBottom: "solid", color: "rgba(155,155,155,0.85)", fontFamily: "fantasy" }}  >
                              {position + "??"}
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
          }
        </List>
      </Dialog>
    </div>
  );
}