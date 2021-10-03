import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import img1 from "../images/images-1/image-1.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    backgroundImage: `url(${img1})`,
    objectFit: "cover",
    width: "100%",
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));
const AboutUs = ({ user, islogged, openProfile, logout }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card} style={{ height: "40rem" }}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    hello
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    1234
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    asdfafd
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>

              <CardMedia image={classes.cardMedia} />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default AboutUs;
