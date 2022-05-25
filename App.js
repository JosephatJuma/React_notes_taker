import React, { useState } from "react";
import "./App.css";
import AddNote from "./componets/AddNote";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Notes from "./componets/Notes";

const App = () => {
  const [showAddNote, setShowAddNote] = useState(false);
  const [notes, setNotes] = useState([]);

  //delete the note
  const deleteNote = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );
    //cancel delete or continue
    if (confirm === true) {
      setNotes(notes.filter((x) => x.id !== id));
    }
  };

  //edit the note
  // const editNote = () => {
  //   setNotes(notes.)
  // }

  //add new note
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    //cancel save or continue typying
    const confirm = window.confirm("Do want to save and quit?");
    if (confirm === true) {
      const newNote = { id, ...note };
      setNotes([...notes, newNote]);

      setShowAddNote(false);
    } else {
      const newNote = { id, ...note };
      setNotes([...notes]);
    }
  };

  return (
    <div className="container">
      <Header
        title="Note Taker"
        onAdd={() => setShowAddNote(!showAddNote)}
        showAdd={showAddNote}
      />
      <hr />
      {showAddNote && <AddNote onAdd={addNote} />}
      <div>
        {notes.length > 0 ? (
          <Notes notes={notes} onDelete={deleteNote} />
        ) : (
          <>
            <h3>No notes to available for showing</h3>
            <br />
          </>
        )}
      </div>
      <hr />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
