
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Ranking } from "../../views";
import Regulation from "../../views/Regulation";

function HomeNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const history = useHistory()

    const [open, setOpen] = React.useState(false);
    const [openRegulation, setOpenRegulation] = React.useState(false);

    const handleCloseRegulation = () => {
        setOpenRegulation(false);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickRegulation = () => {
        setOpenRegulation(true);
    };

    // console.log(history)
    const handleRedirectsAnotherScreen = () => {

    };

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
      <>
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/"
                    >
                      CONQUISTE FIT
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                  style={{background: "transparent"}}
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav    style={{background: "transparent"}} navbar>
                        <NavItem>
                            <Button
                              onClick={() => history.push("/regulation")}
                              className="btn-round"
                              color="center"


                            >
                                REGULAMENTO
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                onClick={handleClickOpen}
                                className="btn-round"
                                color="center"


                            >
                                RANKING
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        <Ranking open={open} handleClose={handleClose}/>
    </>
    );
}

export default HomeNavbar;
