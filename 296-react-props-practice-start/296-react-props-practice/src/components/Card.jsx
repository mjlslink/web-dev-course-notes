import React from "react";

function Card(props) {
    return <div className="card">
        <h2 className="name">{props.fname}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img"/>
        <div className="bottom">
            <p className="info">{props.tel}</p>
            <p className="info">{props.email}</p>
        </div>
    </div>;
}   

export default Card;