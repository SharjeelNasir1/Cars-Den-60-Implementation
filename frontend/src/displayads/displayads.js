import React, { Component } from 'react'
import Ads from './ads/ads'
import { useLocation } from "react-router-dom";
import Axios from 'axios'
import { Ellipsis} from 'react-spinners-css';
import "./displayads.css"

export default class displayads extends Component {
    
    constructor(props) {
        super(props);

    this.state= {
        city:"Islamabad", 
        transmission:"Automatic",
        posts:[]
    }
}

    async componentDidMount(){
        // const posts = await Axios.get(`http://localhost:5000/post/displayads/${this.props.location.state.location}/${this.props.location.state.propertytype}/${ this.props.location.state.location.type }`)
        // this.setState({posts:posts, 
        //     location: this.props.location.state.location, 
        //     propertytype: this.props.location.state.propertytype,  
        //     type: this.props.location.state.location.type })

        const post = await Axios.get(`http://localhost:5000/displayads/${this.state.city}/${this.state.transmission}`)
        
        this.setState({posts:post.data.posts})

    }

     handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    filter=async()=>{
        const c = this.state.city
        const t = this.state.transmission
        const post = await Axios.get(`http://localhost:5000/displayads/${c}/${t}`)
        this.setState({posts:post.data.posts})
    }


    render() {

       

        return (
            <div className="container displayads">
                <div className="row justify-content-center mb-3" style={{padding:"20px"}}>
                    <select name="transmission" value={this.state.transmission} class="p-1 col-md-4 form-control form-control-sm" onChange={this.handleChange}>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </select>

                    <select name="city" value={this.state.city} class="p-1 col-md-4 form-control form-control-sm" onChange={this.handleChange}>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value ="Rawalpindi">Rawalpindi</option>
                    </select>
                    <button type="button" class=" p-1 col-md-2 btn btn-outline-danger btn-sm" onClick={this.filter}>Search</button>

                </div>
                
                {this.state.posts.length> 0 ? 
                <div>
                <Ads posts={this.state.posts}/>
                </div>
                 :<div className="viewHosting__loading">
                 <Ellipsis color="white" style={{margin: 0, position: 'absolute', top: '50%'}}/>
                 </div> }
                 {console.log(this.state.posts)}
            </div>
        )
    }
}

