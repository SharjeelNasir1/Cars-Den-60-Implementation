import React, { Component,useContext } from 'react'
import Axios from 'axios'
// import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import { arrowsPlugin } from '@brainhubeu/react-carousel';
// import Icon from 'react-fa';
import {Carousel} from '3d-react-carousal'
import { UserContext } from "../UserContext";
//import {connect} from "react-redux" 
import {Redirect} from "react-router-dom"
import "./viewhosting.css"
import { Ellipsis} from 'react-spinners-css';

//const value12 = useContext(UserContext);
export class viewad extends Component {
    

    constructor(props) {
        super(props);

    this.state= {
        post:{},
        user:{},
        rendered: false,
        sent: false,
        loggedin : true,
        user_id: this.props.location.state.userid,
        cancel_reservation: false,
        button1: true,
    }
}
    
    
    async componentDidMount(){
        console.log(this.state.user_id)
         const post = await Axios.get(`http://localhost:5000/host/viewhosting/${this.props.location.state.postid}`)
        const user = await Axios.get(`http://localhost:5000/user/${post.data.user}`)
        const logged_user = await Axios.get(`http://localhost:5000/user/${this.props.location.state.userid}`)

        if (logged_user.data.requests.includes(post.data._id)){
            this.setState({post:post.data, rendered:true, user: user.data, cancel_reservation:true})
        }
        

        this.setState({post:post.data, rendered:true, user: user.data})
        
    }

    async reservation(){
        
        const rev = await Axios.get(`http://localhost:5000/host/addrequest/${this.state.user._id}/${this.state.user_id}/${this.state.post._id}/${this.props.location.state.dates}`)
        this.setState({cancel_reservation:true})
        
    } 

    async cancel(){
        const res = await Axios.get(`http://localhost:5000/host/removerequest/${this.state.user_id}/${this.state.post._id}/${this.state.user._id}`)
        this.setState({cancel_reservation:false})
    }

    handleMessage=async()=>{



        console.log("ok1")
        const member1=this.state.user_id
        const member2=this.state.post.user
        const postid=this.state.post._id
        //console.log(this.state.post)
        const findconv=await Axios.get(`http://localhost:5000/conversations/find/${member1}/${member2}/${postid}`)
        console.log(findconv.data)


        if(findconv.data){
            console.log('1')
            this.props.history.push({
                pathname: '/chat',
                state:{conversation:findconv.data}
            })
            
        }
        else{
        const title="For Rent: "+this.state.post.carInfo
        console.log(member1,member2)
        console.log("2")
        const newconv=await Axios.post('http://localhost:5000/conversations/',{senderId:member1,receiverId:member2,title:title,postid:this.state.post._id})
        this.props.history.push({
            pathname: '/chat',
        })
        }
        

        
    }

    render() {

        let slides=[]
        if(this.state.post.photo){
        slides = [
                <img src={`data:${this.state.post.photoType};charset=utf8;base64,${Buffer.from(
                    this.state.post.photo
                  ).toString("ascii")}`} style={{width:'500px', height:"300px"}} />,
                <img src={`data:${this.state.post.photoType};charset=utf8;base64,${Buffer.from(
                    this.state.post.photo
                  ).toString("ascii")}`} style={{width:'500px', height:"300px"}} />,
                <img src={`data:${this.state.post.photoType};charset=utf8;base64,${Buffer.from(
                    this.state.post.photo
                  ).toString("ascii")}`} style={{width:'500px', height:"300px"}}/>
             ]
        }

        // if (this.state.post.pictures.length <2){
        //     slides = [
        //         <img src={this.state.post.pictures[0]} style={{width:'500px', height:"300px"}} />,
        //         <img src={this.state.post.pictures[0]} style={{width:'500px', height:"300px"}} />,
        //         <img src={this.state.post.pictures[0]} style={{width:'500px', height:"300px"}}/>
        //     ]
        // }
        // else if(this.state.post.pictures.length <3){
        //     slides = [
        //         <img src={this.state.post.pictures[0]} style={{width:'500px', height:"300px"}} />,
        //         <img src={this.state.post.pictures[1]} style={{width:'500px', height:"300px"}} />,
        //         <img src={this.state.post.pictures[1]} style={{width:'500px', height:"300px"}}/>
        //     ]
        // }
        // else{
        //     slides = this.state.post.pictures.map(picture => {
        //        return <img src={picture} style={{width:'500px', height:"300px"}} />
        //     })
        // }
     
        return (
            <div>
            {!this.state.loggedin? <Redirect to="/signin"/>:''}
            {this.state.rendered ?
            <div className="viewHosting">
                <div className="viewHosting__carousel">
                    
                        {/* <Carousel  
                        plugins={[
                           'arrows'
                          ]}>
                            <img src={this.state.post.pictures[0]} style={{width:'400px ', height:"300px"}}/>
                            <img src={this.state.post.pictures[0]} style={{width:'400px', height:"300px"}}/>
                            <img src={this.state.post.pictures[0]} style={{width:'400px', height:"300px"}}/>
                        </Carousel> */}
                        <Carousel slides={slides} autoplay={true} interval={5000}/>
                </div>
                <div className="viewHosting__info">
                    <div className="viewHosting__title">{this.state.post.carInfo} </div>
                    <div className="viewHosting__price"> RS {this.state.post.price} per night </div> 

                    <div className="viewHosting__toggle">

                        <button className={this.state.button1? "viewHosting__button1on": "viewHosting__button1"}
                        onClick={() => this.setState({button1:true}) }>Description</button>

                        <button className={this.state.button1?  "viewHosting__button2": "viewHosting__button2on"}
                        onClick={() => this.setState({button1:false}) }>Details</button>
                    </div>

                    <div className="viewHosting__text">
                        {this.state.button1? 
                            <div className="viewHosting__description">
                                {this.state.post.assembly}
                            </div>:
                            <div className="viewHosting__details">
                                <p>Color: {this.state.post.color}</p>
                                <p>Engine Type: {this.state.post.engineType}</p>
                                <p>Engine Cc: {this.state.post.engineCc}</p>
                                <p>transmission: {this.state.post.trans}</p>
                            </div>
                        }
                    </div>
                    <div>
                    {this.state.post.user && this.state.post.user!=this.state.user_id?
                    <div className="viewHosting__buttons">
                        
                        <button className="viewHosting__message" onClick={()=>this.handleMessage()}>Message user</button>
                        {this.state.cancel_reservation? 
                        <button className="viewHosting__cancel" onClick={()=> this.cancel()}>Cancel Reservation</button>:
                        <button className="viewHosting__reservation" onClick={()=> this.reservation()}>Send Reservation</button>
                        }
                    </div>:""}
                    </div>

                    <div className="viewHosting__footer">
                        
                    </div>


  
                </div>    
            </div>:
            <div className="viewHosting__loading">
                <Ellipsis color="white" style={{margin: 0, position: 'absolute', top: '50%'}}/>
            </div>}
            </div>
        )
    }
}


viewad.contextType=UserContext;
  
export default viewad;
