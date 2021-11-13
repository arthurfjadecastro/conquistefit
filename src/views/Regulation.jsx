import React from "react";
import { Page, Text, View, Document, StyleSheet,PDFViewer  } from '@react-pdf/renderer';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Avatar, Grid } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


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


const Regulation = ({open, handleClose}) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog   fullWidth PaperProps={{
        style: {
          maxWidth: "100%",
          height: "100%"
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
              REGULAMENTO
            </Typography>

          </Toolbar>
        </AppBar>
        <List style={{height: "100%", display: "flex"}}>
          <PDFViewer width={"100%"}>
            <Document title={"CONQUISTE FIT - REGULAMENTO"}>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Desafio = Mudança de hábitos + Mudança de mentalidade + reeducação alimentar
                    Período: 16/11/2021 a 14/01/2022
                    Regras: 01 ponto para cada dia de atividade física (segunda a sexta-feira) / 02 pontos para cada dia de atividade física (sábado, domingo e feriados) / 01 ponto para cada % de gordura reduzida / 01 ponto para cada kg de massa muscular que ganhar.
                    Resultado/Objetivo: Qualidade de vida, melhoria na saúde e equilíbrio entre vida profissional e pessoal.
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Preparação: Bioimpedância
                    ⚠️ Entregar a bioimpedância até o dia 10/11/2021. Quem não entregar não poderá participar da disputa.

                    Regras:
                    01 ponto para cada dia de atividade física, de segunda a sexta-feira. Tem que postar a foto no grupo.
                    02 pontos para cada dia de atividade física no final de semana ou feriado. Tem que postar a foto no grupo.
                    01 ponto para cada % de gordura perdido/diminuído.
                    01 ponto para cada kg de massa magra/músculo que ganhar.

                    Conclusão: Finaliza em 10/12/2021. Tem que fazer nova bioimpedância, na mesma clínica/máquina/aparelho que fez a inicial, e entregar obrigatoriamente até o dia 14/12/2021.

                    OBS: Vale qualquer atividade física, desde que faça o mínimo de  30min/dia.</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>


        </List>
      </Dialog>
    </div>
  );
};

export default Regulation;