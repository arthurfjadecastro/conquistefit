
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

function HomeNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const history = useHistory()

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    console.log(history)
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
                        href="/index"
                        target="_blank"
                        title="Coded by Creative Tim"
                    >
                      Conquiste Fit
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
                            <NavLink
                                target="_blank"
                            >
                                <i className="nc-icon nc-book-bookmark" /> REGRAS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button
                                onClick={handleClickOpen}
                                className="btn-round"
                                color="center"


                            >
                                RANKING SR2637
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
