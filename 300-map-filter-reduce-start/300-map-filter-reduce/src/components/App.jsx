import React from "react";
import emojipedia from "../emojipedia";

function App() {
   // var numbers = [3, 56, 2, 48, 5];

    //Map -Create a new array by doing something with each item in an array.
    //const num =0;   
    //const doubleValue = numbers.map( (num) => {num + num*2});

    //Filter - Create a new array by keeping the items that return true.
    
    const output = emojipedia.map( (emoji) => {return emoji.meaning.substring(0,100)});

    console.log(output);

    //Reduce - Accumulate a value by doing something to each item in an array.

//    const output = emojipedia.reduce((element) =>{ return num+element}, num);

    //Find - find the first item that matches from an array.
    //const divEight = numbers.find();

    //FindIndex - find the index of the first item that matches.
    //const divEightIndex = numbers.findIndex();

    return <p>{output}</p>  ;

}

export default App;