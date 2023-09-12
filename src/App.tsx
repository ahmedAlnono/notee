import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowNote from "./pages/ShowNote";
import EditeNote from "./pages/EditeNote";
import CreateNote from "./pages/CreateNote";
// import dummyNote from "./dummy_notes";

function App() {
  const [notes, setNotes] = useState(
    (JSON.parse(localStorage.getItem("notes") ?? "[]") as string[]) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowNote notes={notes} />} />
          <Route
            path="/edite/:id"
            element={<EditeNote notes={notes} setNotes={setNotes} />}
          />
          <Route path="/create" element={<CreateNote setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
