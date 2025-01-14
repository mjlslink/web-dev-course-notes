import React from "react";
import Emoji from './Emoji';
import emojipedia from '../emojipedia';

function emojiDetails(emoji){
  return <Emoji 
      key={emoji.key}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    /> 
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojiDetails)}
      </dl>
    </div>
  );
}

export default App;
