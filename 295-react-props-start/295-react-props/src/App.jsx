import React from "react";
import Card from "./Card.jsx"

function App() {
    return <div> 
        <Card fname='Beyonce' 
            img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            tel= "+1234567890"
            email="beyonce@beyonce.org" />
        <Card fname='Jack Bauer' 
            img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
            tel= "+987 654 321"
            email="jack@nowhere.com" />
        <Card fname='Chuck Norris' 
            img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
            tel= "+987 654 321"
            email="gmail@chucknorris.com" />
    </div>;
}

export default App;