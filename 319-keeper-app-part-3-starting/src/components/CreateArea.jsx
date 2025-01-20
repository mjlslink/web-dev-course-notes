import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addNote}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <Fab><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
