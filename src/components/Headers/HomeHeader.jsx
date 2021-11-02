/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@material-ui/core";
// core components



function HomeHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(/img/background2.jpg",
                    backgroundBlendMode: "lighten",
                    backgroundPosition: isMobile ? "center" : "right"
                }}
            >
                <div className="filter" />
                <div className="content-center" style={{width: "100%"}}>
                    <Container>
                        <div className="title-brand" style={{fontSize: isMobile && 5}}>
                            <h1 className="presentation-title">CONQUISTE FIT</h1>
                        </div>
                        <h2 className="presentation-subtitle text-center">
                            Faça acontecer, evolua sua saúde e seja melhor do que cabo de vassoura
                        </h2>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: "url(/img/clouds.png)"
                    }}
                />
                <h6 className="category category-absolute">
                    Designed and coded by{" "}
                    <a
                        href="http://arthurfjadecastro.com/"
                        target="_blank"
                    >
                       😎 Arthur de Castro
                    </a>
                </h6>
            </div>
        </>
    );
}

export default HomeHeader;




