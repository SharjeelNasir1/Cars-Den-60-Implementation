import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import About from "./AboutUs/AboutUs";
import Contact from "./Contact Us/contactUs";

import { Switch, Route } from "react-router";
import { useHistory } from "react-router-dom";
import Navbar1 from "./Home/Navbar1";
import Home1 from "./Home/Home1";
import Footer from "./Home/Footer";
import Advices from "./Advices/Advices";
//import Notifications from "./rent/Notification/Notifications";
import Buy from "./Advertisement/Buy";
import BuyDetails from "./Advertisement/BuyDetails";
import Login from "./Authentication/Login/Login";
import SignUp from "./Authentication/SignUp/SignUp";
// import Footer from "./Footer";
import MyAdds from "./Auction/myaddfolder/MyAdds";
import Post from "./Auction/SellFormPost/AuctionPost";
// import Rent from "./rent/Rentpost";
import EditAdds from "./Auction/SellAdsEdit/EditAdds";
import AddDetails from "./Auction/myaddfolder/AddDetails";
import LeasePost from "./rent/leasor/LeasePost/LeasePost";
import EditLeasedAds from "./rent/leasor/LeaseEdit/EditLeasedAds";
import MyLeasedAds from "./rent/leasor/MyLeasedAds/MyLeasedAds";
import MyLeasedAdsDetails from "./rent/leasor/MyLeasedAdsDetails/MyLeasedAdsDetails";
import Rent from "./rent/renter/RentAds/Rent";
import RentAdDetails from "./rent/renter/RentAdDetails/RentAdDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Messenger from "./messenger/Messenger";
import displayads from './displayads/displayads'
import viewad from './viewad/viewad'
import NearbyWorkShops from "./WorkshopsNearMe/NearbyWorkShops";
import RentCar from "./rentcar/rentCar";
import displayhostings from './displayhostings/displayhostings'
import viewhosting from './viewhosting/viewhosting'
import Notifications from "./notifications/notifications"
// import Chat from "./Chat";
// import Advices from "./Advices";
import Rate from "./RateAnticipator/Rate";
import { UserContext } from "./UserContext";
import Profile from "./Authentication/Profile/Profile";
const data = JSON.parse(localStorage.getItem("data"));

const App = () => {
  let history = useHistory();
  const [user, setUser] = useState(data ? data.name : "");
  const [islogged, setIslogged] = useState(data ? true : false);
  const [email2, setEmail2] = useState(data ? data.email : "Login");
  const [userid, setUserid] = useState(data ? data._id : "eww");
  const [phoneno,setPhoneno]=useState(data?data.phoneno:"")
  const logout = () => {
    setIslogged(false);
    setUser("");
    localStorage.clear();
  };
  const openProfile = () => {
    console.log("we opening profile");
    history.push("/profile/" + userid);
  };
  const value12 = {
    email2: email2,
    user: user,
    islogged: islogged,
    userid: userid,
    phoneno:phoneno
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={value12}>
          <Navbar1
            user={user}
            islogged={islogged}
            openProfile={openProfile}
            logout={logout}
          />
          <Switch>
            <Route
              path="/"
              exact
              // style={{ height: "2000px" }}

              component={Home1}
            />

            <Route path="/about" component={About} />
            <Route
              path="/contact"
              user={user}
              islogged={islogged}
              openProfile={openProfile}
              logout={logout}
              component={Contact}
            />
            <Route path="/login">
              <Login
                setUserid={setUserid}
                setEmail2={setEmail2}
                setUser={setUser}
                setIslogged={setIslogged}
                setPhoneno={setPhoneno}
              />
            </Route>

            <Route path="/signup" component={SignUp} />

            <Route path="/myadds/:id" component={MyAdds} />
            <Route path="/post/:id" component={Post} />
            <Route path={`/editselladds/:id`} exact component={EditAdds} />
            <Route path={`/add/:id`} exact component={AddDetails} />
            {/* <Route path="/buy" component={Buy} /> */}
            <Route path={`/buyadds/:id`} exact component={BuyDetails} />
            <Route path="/buy" component={displayads}/>
            <Route path="/viewad" component = {viewad}/>
            <Route path={"/rentcar"} exact component={RentCar} />
            <Route path="/displayhostings" component={displayhostings}/>
            <Route path="/viewhosting" component = {viewhosting}/>
            <Route path="/leasepost/:id" component={LeasePost} />
            <Route path="/myleasedads/:id" component={MyLeasedAds} />
            <Route
              path="/myleasedadsdetails/:id"
              component={MyLeasedAdsDetails}
            />
            <Route path="/editleasedads/:id" component={EditLeasedAds} />
            <Route path="/rent/:id" component={Rent} />
            <Route path="/rentadsdetails/:id" component={RentAdDetails} />
            <Route path="/notifications" component={() => (<Notifications user_id={userid} />)}/>
            <Route path="/chat" component={Messenger} />
            <Route path="/ratecheck" component={Rate} />
            {/* <Route path="/card/Rent-it" component={Rent} /> */}
            {/* <Route path="/card/Chat" component={Chat} /> */}
            <Route path="/profile/:id" component={Profile} />
            <Route path="/nearbyworkshops" component={NearbyWorkShops} />
            <Route path="/advices&reviews" component={Advices} />
          </Switch>
        </UserContext.Provider>
        {/* <Footer /> */}
      </ThemeProvider>{" "}
    </React.Fragment>
  );
};

export default App;
