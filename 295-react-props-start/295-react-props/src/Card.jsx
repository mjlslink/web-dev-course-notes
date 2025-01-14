import React from "react";

function Card(props) {
    return <div>
        <h2>{props.fname}</h2>
        <img src={props.img} alt="avatar_img"/>
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </div>;
}

export default Card;