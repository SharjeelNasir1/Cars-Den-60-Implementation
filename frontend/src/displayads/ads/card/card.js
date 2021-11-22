import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import { UserContext } from "../../../UserContext";
import {useHistory} from 'react-router-dom'



const Card = (props) => {

    const history = useHistory()
    const value12=useContext(UserContext)

    return (
        <div className="p-1">
            
            <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" style={{height: "180px", }} src={`data:${props.photoType};charset=utf8;base64,${Buffer.from(
                props.photo
              ).toString("ascii")}`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 style={{color: "black"}}>{props.price}</h5>
                    <p className="card-text" style={{color: "black"}}>{props.title}</p>
                    <button className="btn btn-success" onClick={() => history.push({pathname:'/viewad', state:{postid: props.postid,userid :value12.userid} })} >View ad</button>
                </div>
            </div>
        </div>
    )
}

export default Card
