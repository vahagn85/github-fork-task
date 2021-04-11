import React from 'react';
import {
    Route,
    useLocation,
    NavLink
} from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

import Home from "../../containers/Home";
import Results from "../../containers/Results";
import Search from "../../containers/Search";
import NotFound from "../../containers/NotFound";

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/results', name: 'Results', Component: Results },
    { path: '/search', name: 'Search', Component: Search },
]
const MainRouting = () => {
    const location = useLocation();
    let hasRoute = routes.some( vendor => vendor.path === location.pathname )
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Forks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink
                            to="/"
                            exact
                            className="nav-link"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/results"
                            exact
                            className="nav-link"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}
                        >
                            Results
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container className="container">
                {hasRoute?routes.map(({ path, Component }) => {
                    return (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )
                            }
                        </Route>
                    )
                }
                ):<Route exact component={NotFound}/>
                }
            </Container>
        </React.Fragment>

    );
};

export default MainRouting;