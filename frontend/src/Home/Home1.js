import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import video from "../images/video.mp4";
// import "../sass/main.scss";

import { makeStyles } from "@material-ui/core/styles";

import pic1 from "../images/image_2.webp";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import { Nav, Container, NavDropdown } from "react-bootstrap";
import img1 from "../images/images-1/image-1.jpg";
import img2 from "../images/images-1/image-2.jpg";
import img3 from "../images/images-1/image-3.jpg";
import img4 from "../images/images-1/image-4.jpg";
import img5 from "../images/images-1/image-5.jpg";
import img6 from "../images/images-1/image-6.jpg";
import img7 from "../images/images-1/image-7.jpg";
import img8 from "../images/images-1/image-8.jpg";
import img9 from "../images/images-1/image-9.jpg";
import img10 from "../images/images-1/image-10.jpg";
import img11 from "../images/images-1/image-11.jpg";
import img12 from "../images/images-1/image-12.jpg";
import img13 from "../images/images-1/image-13.jpg";
import img14 from "../images/images-1/image-14.jpg";
import carimg from "../images/carimage.jpg";
// import img from "../images/image_1.png";
import img from "../images/carimage13.png";

import BackgroundVideo from "./BackgroundVideo";
import GridContainers from "./GridContainers";
// import FlexbookTiles from "./FlexbookTiles";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  useScrollTrigger,
  Menu,
  MenuItem,
  Tab,
  Grid,
  SwipeableDrawer,
  Tabs,
  useMediaQuery,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Paper,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "100%",
    paddingTop: "56.25%", // 16:9
  },
  background: {
    // background: `url(${img1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "100%",
    // width: "100%",
  },

  gcontainer: {
    // marginLeft: "auto",
    margin: ".5rem",
    // backgroundColor: "pink",
    padding: "6rem 8vw",
  },
  con: {
    margin: ".5rem",
    // backgroundColor: "pink",
    padding: "6rem 8vw",
  },
}));
const Home1 = ({ user, islogged, openProfile, logout }) => {
  const classes = useStyles();
  const value12 = useContext(UserContext);
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container>
          <BackgroundVideo />
        </Grid>
        <Grid container>
          <GridContainers />
        </Grid>
      </Grid>
    </Grid>

    /* <Grid container justifyContent="center" style={{ height: "40rem" }}>
          Buy
        </Grid>
        <Grid container direction="row" style={{ height: "40rem" }}>
          <Grid item className={[classes.con, classes.background]} lg>
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              {/* <Link exact to="/post/+value12.userid"> 
              <Button
                exact
                component={Link}
                to={value12.islogged ? "/post/" + value12.userid : "/"}
                variant="contained"
              >
                Auction My Car
              </Button>
              {/* </Link>
            </Grid>
          </Grid>
          <Grid
            item
            className={[classes.gcontainer, classes.background]}
            lg
            style={{}}
          >
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              <Button variant="contained">Lease My Car</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ height: "40rem" }}>
          <Grid item className={[classes.con, classes.background]} lg>
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              <Button variant="contained">Auction My Car</Button>
            </Grid>
          </Grid>
          <Grid
            item
            className={[classes.gcontainer, classes.background]}
            // className={classes.background}
            lg
          >
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              <Button
                to={islogged ? "/post/" + value12.userid : "/"}
                component={Link}
                variant="contained"
              >
                Lease My Car
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ height: "40rem" }}>
          <Grid item className={[classes.con, classes.background]} lg>
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              <Button variant="contained">Auction My Car</Button>
            </Grid>
          </Grid>
          <Grid item className={[classes.gcontainer, classes.background]} lg>
            <Typography variant="h3">New to the City?</Typography>
            <Typography variant="h3"> Don't Have a Car? Worry NOT!</Typography>
            <Grid item>
              <Button variant="contained">Lease My Car</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid> */

    /*  <div className="containercss">
      <header className="backimg">
        <video className="bg-video_content" autoPlay loop muted>
          <source src={video} type="video/mp4" />{" "}
        </video>{" "}
      </header>
      <section className="Buy">
        <div className="Buy__buy2">
          <h2 className="heading-2 mb-md">Wish to Buy A New Car</h2>
        </div>
        <div>
          <h2 className="">Don't Have a Car? Worry NOT!</h2>
        </div>
        <div>
          <input type="text" />
          <select>
            <option value="">Registered Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2016">2016</option>
          </select>
          <button className="btn1">
            {" "}
            <i class="search icon"></i>Search
          </button>
        </div>

        <div>
          <img src={img} />
        </div>
      </section>
      <div className="card1__auction">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link to="">
          <button className="btn1">
            <i class="car icon"></i>Auction My Car
          </button>
        </Link>
      </div>
      <div className="card1__Lease ">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link>
          <button className="btn1">
            <i class="car icon"></i>Lease My Car
          </button>
        </Link>
      </div>
      <div className="card2__rate">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link to="">
          <button className="btn1">
            <i class="car icon"></i>Rate My Car
          </button>
        </Link>
      </div>
      <div className="card2__rent">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link to="">
          <button className="btn1">
            <i class="car icon"></i>Rent A Car
          </button>
        </Link>
      </div>
      <div className="card3__workshops">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link to="">
          <button className="btn1">
            <i class="car icon"></i>workshops
          </button>
        </Link>
      </div>
      <div className="card3__news">
        <h2 className="heading-2 mb-md">New to the City?</h2>
        <h2 className="heading-2 mb-md">Don't Have a Car? Worry NOT!</h2>
        <Link to="">
          <button className="btn1">
            <i class="car icon"></i>Advices & Reviews
          </button>
        </Link>
      </div>
     <section className="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src={img1} alt="Gallery image 1" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={img2} alt="Gallery image 2" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={img3} alt="Gallery image 3" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={img4} alt="Gallery image 4" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img src={img5} alt="Gallery image 5" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={img6} alt="Gallery image 6" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--7">
          <img src={img7} alt="Gallery image 7" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img src={img8} alt="Gallery image 8" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--9">
          <img src={img9} alt="Gallery image 9" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--10">
          <img src={img10} alt="Gallery image 10" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--11">
          <img src={img11} alt="Gallery image 11" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--12">
          <img src={img12} alt="Gallery image 12" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--13">
          <img src={img13} alt="Gallery image 13" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--14">
          <img src={img14} alt="Gallery image 14" class="gallery__img" />
        </figure>
      </section> 
  </div>*/
  );
};

export default Home1;
