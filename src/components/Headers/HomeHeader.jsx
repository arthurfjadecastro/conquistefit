/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function HomeHeader() {
    return (
        <>
            {/*<img alt={"ae"} src="/img/antoine-barres.jpg"/>*/}
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(/img/background2.jpg",
                    backgroundBlendMode: "lighten",
                    backgroundPosition: "right"
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">CONQUISTE FIT</h1>
                            <div className="fog-low">
                                {/*<img alt="..." src={"/img/fog-low.png"} />*/}
                            </div>
                            <div className="fog-low right">
                                {/*<img alt="..." src={"/img/fog-low.png"} />*/}
                            </div>
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
