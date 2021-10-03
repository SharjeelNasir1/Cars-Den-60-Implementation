import React from "react";
import Card from "./Card";
import { useState } from "react";
import AdviceCardData from "./AdviceCardData";
import AdviceCardData2 from "./AdviceCardData2";
import info_1 from "../images/info_1.webp";
import info_2 from "../images/info_2.webp";
import info_3 from "../images/info_3.webp";
import review from "../images/review1.jpg";

const Advices = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <>
      <h1 className="text-center">Advices and Reviews</h1>
      <img src={review} alt="" />
      <div className="container-fluid advices_color1">
        <div className="row ">
          <div className="col-md-12 ">
            <h5>*LATEST SECURITY ANNOUNCEMENT*</h5>
            <h3>Fraudulent Calls</h3>
            <p1>
              We’re aware of scammers attempting to get personal information and
              payment details by impersonating Auto Trader and contacting
              private sellers saying they’ve been overcharged or should have had
              a discount due to the pandemic. We’ll never contact you via the
              protected number on your advert. Never give out bank or card
              details to an unsolicited caller. If a caller asks for a copy of
              your V5C logbook prior to viewing your vehicle, we would advise
              you not to disclose it. If you’d like to check a call is genuine,
              please call or email us.
            </p1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row my-4 ">
          <div className="col-md-8 advices_color2 ">
            <h7>SECURITY ADVICE</h7>
            <h2>How to buy and sell vehicles safely</h2>
            <p1>
              Buying or selling a car should be a pleasant, hassle-free
              experience‚ and at Auto Trader we do everything we can to make
              sure that's the case. Our handy hints and tips will ensure you
              stay safe online, whether you're buying or selling a car.
            </p1>
          </div>
          <div className="col-md-4">
            <h3 className="advices_color3">Report an issue</h3>
            <p1>
              Think you’ve been a victim of fraud or spotted something we should
              know about?
            </p1>
            <br />
            <button className="advices_color4 btn-danger">Report</button>
          </div>
        </div>
      </div>

      {/*-----------------------cards-----------------*/}

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 mx-auto  text-primary text-center">
            <div className="row gy-4">
              <h1 className="expert_reviews">Expert Reviews</h1>
              {AdviceCardData.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    btname={val.btname}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*  <div className='container'>
            {isVisible ? <div className='comp1'>now u see</div> :''}
            <button onClick={()=>{
                setisVisible(v=> !v)
            }}> {isVisible ? 'Hide' :'Click to see'}</button>
        </div>  */}

      <div className="container-fluid my-5 advices_color5">
        <div className="row">
          <h1>Generated Reviews</h1>
          <div className="col-md-10 advices_color6 bg-light ">
            <h5>NEVER SEND MONEY FOR A VEHICLE YOU HAVEN’T SEEN</h5>
            <p1>
              View and check the vehicle and documents before handing over any
              money. The only exception would be if you have arranged home
              delivery from one of our advertising dealers who offer this
              service. If you’re paying a deposit or paying upfront for click
              and collect/home delivery, consider using a credit card as this
              offers additional protection.
            </p1>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 advices_color5">
        <div className="row">
          <div className="col-md-10 advices_color6 bg-light">
            <h5>KEEP YOUR KEYS SAFE DURING VIEWINGS</h5>
            <p1>
              Never leave a potential buyer alone with the vehicle, give them
              the keys, or let them borrow the car documents. Never allow
              unsupervised access to the engine or allow yourself to be
              distracted during a viewing of your vehicle.
            </p1>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 advices_color5 ">
        <div className="row">
          <div className="col-md-10 advices_color6 bg-light">
            <h5>LOOK OUT FOR SCAM CALLS, EMAILS AND TEXTS</h5>
            <p1>
              We’ll never call you on the protected number on your advert or ask
              you to login to your Auto Trader account via email or SMS. Only
              enter your login details where you see a padlock icon in your
              browser window.
            </p1>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 mx-auto  text-primary text-center">
            <div className="row gy-4">
              <h1 className="expert_reviews">Expert multi-car comparisons</h1>
              {AdviceCardData2.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    btname={val.btname}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="info">
              <h1 className="text-primary">
                One stop, multiple financing sources
              </h1>
              <p>
                Our finance sources accommodate a wide range of customers,
                including first-time buyers.
              </p>
              <img className="imgInfo" src={info_1} alt="" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="info">
              <h1 className="text-primary">
                Financing as simple as our car prices
              </h1>
              <p>
                It’s no pressure, hassle-free, and your financing choice never
                alters the price of your car..
              </p>
              <img className="imgInfo" src={info_2} alt="" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="info">
              <h1 className="text-primary">No surprises, no regrets</h1>
              <p>
                Get pre-approved to get an idea of what you can spend on a used
                car. If you find other financing after you buy, use our 3-day
                payoff program.
              </p>
              <img className="imgInfo" src={info_3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h1 className="tools">Tools & expert advice</h1>
            <h5>
              <strong>Side-by-side comparisons</strong>
            </h5>
            <p>Choose up to four models or see popular comparisons</p>
            <p className="compare_models">Compare models</p>
            <hr />

            <h5>
              <strong>Payment calculator</strong>
            </h5>
            <p>Estimate your monthly car payments.</p>
            <p className="compare_models">Calculate payments</p>
            <hr />

            <h5>
              <strong>Certified Pre-Owned cars</strong>
            </h5>
            <p>Search, compare or research CPO programs.</p>
            <p className="compare_models">Shop & learn CPO</p>
            <hr />

            <h5>
              <strong>Car reviews</strong>
            </h5>
            <p>Read vehicle reviews written by consumers.</p>
            <p className="compare_models">Search consumer reviews</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default Advices;
