import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from "react-router-dom"
// import '@brainhubeu/react-carousel/lib/style.css';
import { Ellipsis} from 'react-spinners-css';
import {Carousel} from '3d-react-carousal'
import "./viewad.css"


export class viewad extends Component {

    constructor(props) {
        super(props);

    this.state= {
        post:{},
        user:{},
        rendered: false,
        currentuser:this.props.location.state.userid,
        button1: true,
        }
    }
    
    async componentDidMount(){
        const post = await Axios.get(`http://localhost:5000/adddetails/${this.props.location.state.postid}`)
        const user = await Axios.get(`http://localhost:5000/user/${post.data.userid}`)
    
        this.setState({post:post.data, rendered:true, user: user.data})
    }


    handleChange = (e) =>{
      
      
        this.setState({[e.target.name] : e.target.value});
    }


    handleMessage=async()=>{



        console.log("ok1")
        const member1=this.state.currentuser
        const member2=this.state.user._id
        const postid=this.state.post._id
        console.log(member1,member2,postid)
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
        const title="For Buy: "+this.state.post.carInfo
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
            {this.state.rendered ?
            <div className="viewad">
            <div className="viewad__carousel">
                    <Carousel slides={slides} autoplay={true} interval={5000}/>
            </div>
            <div className="viewad__info">
                <div className="viewad__title">{this.state.post.carInfo} </div>
                <div className="viewad__price"> RS {this.state.post.price}</div> 

                <div className="viewad__toggle">

                    <button className={this.state.button1? "viewad__button1on": "viewad__button1"}
                    onClick={() => this.setState({button1:true}) }>Description</button>

                    <button className={this.state.button1?  "viewad__button2": "viewad__button2on"}
                    onClick={() => this.setState({button1:false}) }>Details</button>
                </div>

                <div className="viewad__text">
                    {this.state.button1? 
                        <div className="viewad__description">
                            {this.state.post.assembly}
                        </div>:
                        <div className="viewad__details">
                            <p>Color: {this.state.post.color}</p>
                            <p>Engine Type: {this.state.post.engineType}</p>
                            <p>Engine Cc: {this.state.post.engineCc}</p>
                            <p>transmission: {this.state.post.trans}</p>
                    </div>
                    }
                </div>

                <div className="viewad__buttons">
                    {this.state.currentuser && this.state.currentuser!=this.state.user._id ?
                    <button className="viewad__message" onClick={()=>{this.handleMessage()}}>Message user</button>:""}
                </div>

               



            </div>    
        </div>:
            <div className="viewHosting__loading">
                <Ellipsis color="white" style={{margin: 0, position: 'absolute', top: '50%'}}/>
            </div>
        }
            </div>
        )
    }
}



export default viewad
