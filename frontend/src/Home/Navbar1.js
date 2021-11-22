import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import logo from "../images/logo-white.png";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  useScrollTrigger,
  Menu,
  MenuItem,
  Tab,
  SwipeableDrawer,
  Tabs,
  useMediaQuery,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
//import theme from "../ui/Theme";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0rem",
  },
  logo: {
    height: "4rem",
    [theme.breakpoints.down("md")]: { height: "3rem" },
    [theme.breakpoints.down("xs")]: { height: "2rem" },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tabLeft: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  tabRight: {
    ...theme.typography.tab,
    marginLeft: "15px",
    minWidth: 10,
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: "black",
        color: "white",
        borderRadius: "0px",
      },
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
    drawerIcon: {
      height: "50px",
      width: "50px",
    },
    drawerIconContainer: {
      marginLeft: "50rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  },
}));

const Navbar = ({ user, islogged, openProfile, logout }) => {
  let history = useHistory();
  const value12 = useContext(UserContext);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const tabs = (
    <React.Fragment>
      <Tabs>
        {console.log(islogged)}
        <Tab
          className={classes.tabLeft}
          component={Link}
          to=""
          label="Services"
        />
        <Tab
          className={classes.tabLeft}
          component={Link}
          to="/rentCar"
          label="Rent a Car"
        />
        <Tab
          className={classes.tabLeft}
          component={Link}
          to="/buy"
          label="Buy"
        />
        {/* <Tab
          className={classes.tabLeft}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tabLeft}
          component={Link}
          to="/contact"
          label="Contact Us"
        /> */}

      </Tabs>

      {islogged ? (
        <Tabs className={classes.tabContainer}>
          <Tab
            className={classes.tabRight}
            icon={<NotificationsNoneIcon />}
            component={Link}
            to={"/notifications"}
          />
          <Tab
            className={classes.tabRight}
            component={Link}
            to="/chat"
            icon={<ChatBubbleOutlineIcon />}
          />
          <Tab
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup={anchorEl ? "true" : undefined}
            onMouseOver={(event) => handleClick(event)}
            className={classes.tabRight}
            icon={<PersonPinIcon />}
          />
        </Tabs>
      ) : (
        <Tabs className={classes.tabContainer}>
          <Tab
            component={Link}
            to="/login"
            className={classes.tabRight}
            label="Login"
          />
          <Tab
            component={Link}
            to="/signup"
            className={classes.tabRight}
            label="Register"
          />
        </Tabs>
      )}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        // className={classes.menu}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        keepMounted
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
          component={Link}
          exact
          to={"/profile/" + value12.userid}
          classes={{ root: classes.menuItem }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
          component={Link}
          to="/settings"
          classes={{ root: classes.menuItem }}
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={logout}
          component={Link}
          exact
          to="/"
          classes={{ root: classes.menuItem }}
        >
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {/* <div className={classes.toolbarMargin} /> */}
        <List disablePadding>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          {/* <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/about"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem> */}
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/rentcar"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Rent a Car
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/buy"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Buy
            </ListItemText>
          </ListItem>
        </List>
        {islogged ? (
          <List disablePadding>
            
            <ListItem
              divider
              onClick={() => setOpenDrawer(false)}
              button
              component={Link}
              to={"/notifications"}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Notifications
              </ListItemText>
            </ListItem>
            <ListItem
              onClick={() => setOpenDrawer(false)}
              divider
              button
              component={Link}
              to="/chat"
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Messages
              </ListItemText>
            </ListItem>
            <ListItem
              onClick={() => setOpenDrawer(false)}
              divider
              button
              component={Link}
              to={"/profile/" + value12.userid}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Profile
              </ListItemText>
            </ListItem>
          </List>
        ) : (
          <List disablePadding>
            <ListItem
              onClick={() => setOpenDrawer(false)}
              divider
              button
              component={Link}
              to="/login"
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Login
              </ListItemText>
            </ListItem>
            <ListItem
              onClick={() => setOpenDrawer(false)}
              divider
              button
              component={Link}
              to="/signup"
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Register
              </ListItemText>
            </ListItem>
          </List>
        )}
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon color="secondary" className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img alt="company Logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Navbar;

{
  /* <Typography variant="h3">Cars Den</Typography>
             <Grid container>
              <Grid item>
                <IconButton>
                  <NavLink to="/">Cars Den</NavLink>
                </IconButton>
               <IconButton>
              <NavLink exact to={islogged ? "/post/" + value12.userid : "/"}>
                Post
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink exact to="/buy">
                Buy
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink
                exact
                to={islogged ? "/leasepost/" + value12.userid : "/"}
              >
                Lease
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink exact to={islogged ? "/rent/" + value12.userid : "/"}>
                Rent
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink>
                Advices & Reviews
              </NavLink>
            </IconButton>
              </Grid>
              <Grid item sm></Grid>

              {islogged ? (
                <Grid item>
                  <NavLink exact onClick={logout} to="">
                    Logout
                  </NavLink>
                  <IconButton>
                    <NavLink to={"/notifications/" + value12.userid}>
                      <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneIcon />
                      </Badge>{" "}
                    </NavLink>
                  </IconButton>
                  <IconButton>
                    <NavLink to={"/chat"}>
                      <Badge badgeContent={3} color="secondary">
                        <ChatBubbleOutlineIcon />
                      </Badge>
                    </NavLink>
                  </IconButton>
                  <IconButton>
                    <AccountCircleIcon />{" "}
                  </IconButton>
                  <NavLink exact to={"/profile/" + value12.userid}>
                    {user}
                  </NavLink>
                </Grid>
              ) : (
                <Grid item>
                  <NavLink exact to="/login">
                    Log in
                  </NavLink>
                  <NavLink exact to="/signup">
                    Sign-Up
                  </NavLink>
                </Grid>
              )}
            </Grid>
          

     <div className="Navbar1">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-12 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    Cars Den
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-g-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to={islogged ? "/post/" + value12.userid : "/"}
                        >
                          Post
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/buy"
                        >
                          Buy
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/advices&reviews"
                        >
                          Advices & Reviews
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/contact"
                        >
                          Contact Us
                        </NavLink>
                      </li>

                      <div style={{ position: "absolute", right: -850 }}>
                        {islogged ? (
                          <li className="nav-item">
                            <NavLink
                              activeClassName="menu_active"
                              style={{ display: "inline-block" }}
                              exact
                              className="nav-link"
                              onClick={logout}
                              to=""
                            >
                              Logout
                            </NavLink>
                            <NavLink
                              activeClassName="menu_active"
                              style={{ display: "inline-block" }}
                              exact
                              className="nav-link"
                              to={"/profile/" + value12.userid}
                            >
                              {user}
                            </NavLink>
                          </li>
                        ) : (
                          <li className="nav-item">
                            <NavLink
                              activeClassName="menu_active"
                              style={{ display: "inline-block" }}
                              exact
                              className="nav-link"
                              to="/login"
                            >
                              Log in
                            </NavLink>
                            <NavLink
                              activeClassName="menu_active"
                              style={{ display: "inline-block" }}
                              exact
                              className="nav-link"
                              to="/signup"
                            >
                              Sign-Up
                            </NavLink>
                          </li>
                        )}
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
                        </> */
}
