import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

import Home from "../src/components/home/Home";
import Login from "../src/components/login/Login";

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              UniRequests
            </Typography>
            <Button color="inherit">
              <Link to={"/"} className={classes.link}>
                Home
              </Link>{" "}
            </Button>
            <Button color="inherit">
              <Link to={"/login"} className={classes.link}>
                Login
              </Link>{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default App;
