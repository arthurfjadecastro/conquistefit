import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PDFReader, MobilePDFReader } from "reactjs-pdf-reader";




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "rgba(0,57,186,0.80)"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: 'Oswald'
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



const Regulation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <div>
        {!isMobile ?  <div>
          <PDFReader showAllPage url={"/img/SR2637.pdf"} />
        </div> : <div style={{height:"100vh"}}><MobilePDFReader scale={0.8} showAllPage url={"/img/SR2637.pdf"} /> </div> }
    </div>
  );
};

export default Regulation;