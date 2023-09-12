import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ note }: any) {
  return (
    <Link
      to={`edite/${note.id}`}
      className="note"
      grid-width={`${Math.floor(Math.random() * 3)}`}
      grid-heigh={`${Math.floor(Math.random() * 3)}`}
    >
      <h4>
        {note.title.length > 140 ? note.title.substr(0, 140) : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
}

export default NoteItem;
