import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
function CreateNote({ setNotes }: any) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();
  return (
    <div className="create-note">
      <header>
        <Link to="/" className="btn back-btn">
          <IoIosArrowBack
            style={{
              fontSize: "20px",
              backgroundColor: "black",
              fill: "white",
              margin: "3px",
              borderRadius: "50%",
            }}
          />
        </Link>
        <button
          className="save-btn"
          id="create-note"
          type="submit"
          form="create-form"
        >
          Save
        </button>
      </header>
      <form
        className="create-note-form"
        id="create-form"
        onSubmit={function (e) {
          e.preventDefault();
          if (title && description) {
            const note = {
              id: uuid(),
              title: title,
              description: description,
              date: new Date().toLocaleDateString(),
            };
            setNotes((prev: any) => [...prev, note]);
            // console.log(e.target[1].value);
            setTitle("");
            setDescription("");
            navigate("/");
          }
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="Title"
          name="title"
          autoFocus
          required
          onChange={async function (e) {
            setTitle(e.target.value);
          }}
        />
        <textarea
          value={description}
          rows={22}
          name="description"
          placeholder="Description...."
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default CreateNote;
