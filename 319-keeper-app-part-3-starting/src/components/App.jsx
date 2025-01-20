import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([
    {key:0, id:0, title: "Buy eggs", content: "Supermarket"}, 
    {key:1, id:1, title: "Go to doctor's office", content: "Dr. Jensen"}
  ]);

  function addNote(e) {
    
    e.preventDefault();

    const noteId = notes.length +1;
    const noteName = e.target.title.value;
    const noteContent = e.target.content.value;
    
    setNotes([...notes, {key:noteId, id:noteId, title: noteName, content: noteContent}]);
    console.log("Notes", notes);
    
  }

  function deleteNote(id) {
    //e.preventDefault();
    setNotes(prevNotes => { 
      return prevNotes.filter((note, index) => {
        return id !== index;
  })});
  }
 
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map( (note) => {return <Note key={note.key} id={note.id} title={note.title} content={note.content} deleteNote={deleteNote} />})}
      <Footer />
    </div>
  );
}

export default App;
