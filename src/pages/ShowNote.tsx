/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
// import dummyNotes from "../dummy_notes";

function ShowNote({ notes }: any) {
  const [searchNote, setSearchNote] = React.useState("");
  let newNotes: any;
  return (
    <div className="show-notes">
      <header>
        <h2>My notes</h2>
        <form action="">
          <input
            type="text"
            autoFocus
            placeholder="search...."
            value={searchNote}
            onChange={function (e) {
              setSearchNote(e.target.value);
              newNotes = notes.filter((note: any) => {
                if (
                  note.title.toLowerCase().match(searchNote.toLocaleLowerCase())
                ) {
                  return note;
                }
              });
            }}
          />
          <button>
            <BsSearch />
          </button>
        </form>
        <Link className="btn add-btn" to={"/create"}>
          <BsPlusLg />
        </Link>
      </header>
      <div className="notes">
        {notes.map(
          (note: { id: any; title: String; date: String; details: String }) => {
            return <NoteItem key={note.id} note={note} />;
          }
        )}
      </div>
    </div>
  );
}

export default ShowNote;
